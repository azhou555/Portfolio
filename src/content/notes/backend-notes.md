---
title: Backend Engineering Notes
date: 2026-08-01
---

# Complete Backend Engineering Interview Preparation Guide

## Table of Contents

- [Design Patterns](## design-patterns)
- [Code Design](#code-design)
- [Programming Languages](#programming-languages)
- [Web Development](#web-development)
- [Databases](#databases)
- [NoSQL](#nosql)
- [Version Control](#version-control)
- [Concurrency](#concurrency)
- [Distributed Systems](#distributed-systems)
- [Software Lifecycle & Team Management](#software-lifecycle--team-management)
- [Algorithms & Logic](#algorithms--logic)
- [Software Architecture](#software-architecture)
- [SOA and Microservices](#soa-and-microservices)
- [Security](#security)
- [General Questions](#general-questions)
- [Open Questions](#open-questions)
- [Code Snippet Problems](#code-snippet-problems)
- [Behavioral Questions](#behavioral-questions)

---

## Design Patterns

### Globals Are Evil

**Why are global and static objects problematic?**

1. **Hidden dependencies** and tight coupling
2. **Testing difficulties** - hard to mock/isolate
3. **Unpredictable initialization order**
4. **Thread-safety issues**
5. **Violation of encapsulation**

#### Bad Example:

```java
// Bad - Global State
public class DatabaseConnection {
    public static Connection conn = null;

    public static void connect() {
        conn = DriverManager.getConnection("jdbc:mysql://localhost/db");
    }
}

public class UserService {
    public void saveUser(User user) {
        // Hidden dependency on global state
        DatabaseConnection.conn.execute("INSERT INTO users...");
    }
}
```

#### Good Example - Dependency Injection:

```java
public class UserService {
    private final Connection connection;

    public UserService(Connection connection) {
        this.connection = connection; // Explicit dependency
    }

    public void saveUser(User user) {
        connection.execute("INSERT INTO users...");
    }
}
```

---

### Inversion of Control (IoC)

**Definition**: The control flow is inverted - instead of your code calling a framework, the framework calls your code.

**Benefits:**

- Loose coupling
- Better testability
- Flexibility in implementation swapping

```java
// Without IoC - Tight Coupling
public class EmailService {
    public void sendEmail() {
        SmtpClient client = new SmtpClient(); // Direct instantiation
        client.send();
    }
}

// With IoC - Loose Coupling
public class EmailService {
    private final EmailClient client;

    public EmailService(EmailClient client) { // Injected dependency
        this.client = client;
    }

    public void sendEmail() {
        client.send();
    }
}
```

---

### Law of Demeter

**Principle**: "Only talk to your immediate friends"

An object should only call methods on:

- Itself
- Objects passed as parameters
- Objects it creates
- Its direct component objects

#### Violation Example:

```java
// Bad - Train Wreck
public class Customer {
    public void purchaseItem(Item item) {
        double price = item.getStore().getInventory().getPrice(item.getId());
        // Knows too much about object structure
    }
}
```

#### Fixed Version:

```java
// Good - Following Law of Demeter
public class Customer {
    public void purchaseItem(Item item) {
        double price = item.getPrice(); // Item handles its own pricing logic
    }
}

public class Item {
    private Store store;

    public double getPrice() {
        return store.getPriceFor(this); // Delegate to immediate friend
    }
}
```

---

### Active-Record Pattern

**Definition**: Combines data access logic with domain logic in a single class.

**Limitations:**

1. Tight coupling to database schema
2. Violates Single Responsibility Principle
3. Testing requires database
4. Complex queries become awkward
5. Poor for complex domain logic

```ruby
# Active Record Example (Ruby/Rails style)
class User < ActiveRecord::Base
  validates :email, presence: true

  def full_name
    "#{first_name} #{last_name}"
  end

  # This mixes domain logic with persistence
  def promote_to_admin
    self.role = 'admin'
    self.promoted_at = Time.now
    save! # Database operation mixed with business logic
  end
end
```

---

### Data-Mapper Pattern

**Definition**: Completely separates domain objects from persistence layer.

```java
// Domain Object - Pure business logic
public class User {
    private String id;
    private String email;

    public void promote() {
        this.role = Role.ADMIN;
        this.promotedAt = Instant.now();
        // Pure domain logic, no DB awareness
    }
}

// Separate Mapper handles persistence
public class UserMapper {
    public User findById(String id) {
        ResultSet rs = db.query("SELECT * FROM users WHERE id = ?", id);
        return hydrate(rs);
    }

    public void save(User user) {
        db.execute("UPDATE users SET ...", user.getFields());
    }
}
```

**When to use each:**

- **Active-Record**: Simple CRUD apps, rapid prototyping
- **Data-Mapper**: Complex domain logic, large teams, DDD approaches

---

### Billion Dollar Mistake (Null References)

Tony Hoare's "billion-dollar mistake" - null references causing countless bugs.

#### Solutions:

**1. Null Object Pattern:**

```java
public interface Logger {
    void log(String message);
}

public class ConsoleLogger implements Logger {
    public void log(String message) {
        System.out.println(message);
    }
}

public class NullLogger implements Logger {
    public void log(String message) {
        // Do nothing - no null checks needed
    }
}
```

**2. Option Types (Optional/Maybe):**

```java
// Java Optional
Optional<User> user = userRepository.findById(id);
user.ifPresent(u -> u.sendEmail());

// Or chain operations safely
String email = userRepository.findById(id)
    .map(User::getEmail)
    .orElse("no-email@example.com");
```

**3. Kotlin's Null Safety:**

```kotlin
var name: String = "John"  // Cannot be null
var nullable: String? = null  // Can be null
nullable?.length  // Safe call
```

---

### Inheritance vs Composition

**Principle**: "Favor composition over inheritance"

#### Inheritance Problems:

```java
// Rigid hierarchy
class Bird {
    void fly() { }
}

class Penguin extends Bird {
    @Override
    void fly() {
        throw new UnsupportedOperationException(); // Violates LSP
    }
}
```

#### Composition Solution:

```java
interface FlyingBehavior {
    void fly();
}

class Bird {
    private FlyingBehavior flyingBehavior;

    public Bird(FlyingBehavior behavior) {
        this.flyingBehavior = behavior;
    }
}

// Flexible - can change behavior at runtime
Bird penguin = new Bird(new NonFlyingBehavior());
Bird eagle = new Bird(new SoaringBehavior());
```

---

### Anti-Corruption Layer

**Definition**: A layer that translates between different domain models.

```java
// External system's model (we don't control)
class LegacyUser {
    String usr_nm;
    String e_mail;
}

// Anti-corruption layer
class UserTranslator {
    User fromLegacy(LegacyUser legacy) {
        return new User(
            legacy.usr_nm,
            EmailAddress.parse(legacy.e_mail)
        );
    }
}

// Our clean domain model
class User {
    private String username;
    private EmailAddress email;
}
```

---

### Singleton Pattern (Thread-Safe)

```java
// Thread-Safe Singleton using Double-Checked Locking
public class Singleton {
    private static volatile Singleton instance;
    private static final Object lock = new Object();

    private Singleton() {
        // Prevent reflection attacks
        if (instance != null) {
            throw new IllegalStateException("Instance already exists");
        }
    }

    public static Singleton getInstance() {
        if (instance == null) { // First check (no locking)
            synchronized (lock) {
                if (instance == null) { // Second check (with locking)
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}

// Modern Java - Enum Singleton (Best Practice)
public enum BetterSingleton {
    INSTANCE;

    public void doSomething() {
        // Business logic
    }
}
```

---

### Data Abstraction

#### Violation:

```java
// Bad - Exposes implementation
class Rectangle {
    public double x1, y1, x2, y2; // Direct coordinate access
}

Rectangle r = new Rectangle();
double width = r.x2 - r.x1; // Client depends on representation
```

#### Fixed:

```java
// Good - Hides implementation
class Rectangle {
    private Point topLeft, bottomRight;

    public double getWidth() {
        return bottomRight.getX() - topLeft.getX();
    }

    public void setDimensions(double width, double height) {
        // Can change internal representation without affecting clients
    }
}
```

---

### DRY Principle Violation and Fix

#### Violation:

```python
def calculate_user_discount(user):
    if user.years_member > 5:
        return 0.20
    elif user.years_member > 3:
        return 0.15
    elif user.years_member > 1:
        return 0.10
    return 0.05

def calculate_user_shipping(user):
    if user.years_member > 5:
        return 0
    elif user.years_member > 3:
        return 5
    elif user.years_member > 1:
        return 10
    return 15
```

#### Fixed:

```python
class MembershipTier:
    TIERS = [
        (5, 'platinum', 0.20, 0),
        (3, 'gold', 0.15, 5),
        (1, 'silver', 0.10, 10),
        (0, 'bronze', 0.05, 15)
    ]

    @classmethod
    def get_tier(cls, years):
        for min_years, name, discount, shipping in cls.TIERS:
            if years > min_years:
                return name, discount, shipping
        return cls.TIERS[-1][1:]
```

---

### Dependency Hell Solutions

1. **Semantic Versioning**: MAJOR.MINOR.PATCH
2. **Lock Files**: `package-lock.json`, `Gemfile.lock`
3. **Virtual Environments**: Python venv, Node nvm
4. **Containerization**: Docker
5. **Dependency Injection**: Reduce tight coupling
6. **Module Systems**: OSGi for Java

---

### Goto Statement

**Problems:**

- Breaks structured programming
- Hard to follow code flow
- Complicates debugging

**Legitimate Uses:**

```c
// Acceptable use - cleanup in C
int process_file() {
    FILE *f1 = NULL, *f2 = NULL;
    char *buffer = NULL;
    int ret = -1;

    f1 = fopen("input.txt", "r");
    if (!f1) goto cleanup;

    f2 = fopen("output.txt", "w");
    if (!f2) goto cleanup;

    buffer = malloc(1024);
    if (!buffer) goto cleanup;

    // Process...
    ret = 0;

cleanup:
    if (buffer) free(buffer);
    if (f2) fclose(f2);
    if (f1) fclose(f1);
    return ret;
}
```

---

### Robustness Principle (Postel's Law)

**"Be conservative in what you send, liberal in what you accept"**

```python
class APIEndpoint:
    def process_request(self, data):
        # Liberal in accepting - handle various formats
        if isinstance(data, str):
            data = json.loads(data)
        elif isinstance(data, bytes):
            data = json.loads(data.decode('utf-8'))

        # Normalize inconsistent field names
        user_id = data.get('userId') or data.get('user_id') or data.get('id')

        # Conservative in sending - strict, consistent format
        return {
            'status': 'success',
            'data': {
                'userId': str(user_id),
                'timestamp': datetime.utcnow().isoformat()
            }
        }
```

---

### Separation of Concerns

**MVC Example:**

```python
# Model - Data logic
class User:
    def save(self): pass

# View - Presentation
class UserView:
    def render(self, user): pass

# Controller - Business logic
class UserController:
    def create_user(self, data):
        user = User(**data)
        user.save()
        return UserView().render(user)
```

**Aspect-Oriented Programming:**

```java
@Aspect
public class LoggingAspect {
    @Before("@annotation(Loggable)")
    public void logMethodCall(JoinPoint joinPoint) {
        // Logging concern separated from business logic
    }
}
```

---

## Code Design

### High Cohesion, Loose Coupling

**Definitions:**

- **High Cohesion**: Elements within module work toward single purpose
- **Loose Coupling**: Minimal dependencies between modules

```python
# High Cohesion - All methods relate to user authentication
class AuthenticationService:
    def login(self, credentials): pass
    def logout(self, token): pass
    def refresh_token(self, token): pass
    def validate_token(self, token): pass

# Loose Coupling - Uses interfaces, not concrete implementations
class OrderService:
    def __init__(self, payment_gateway: PaymentInterface):
        self.gateway = payment_gateway
```

---

### Why Array Indexes Start at 0

Arrays are contiguous memory blocks. Index represents offset from base address:

- `array[0]` = base_address + (0 × element_size)
- `array[i]` = base_address + (i × element_size)

Starting at 0 makes pointer arithmetic simpler and more efficient.

---

### TDD's Impact on Design

TDD naturally leads to:

1. **Smaller, focused methods** (easier to test)
2. **Loose coupling** (for mocking)
3. **Interface-based design** (testable boundaries)
4. **SOLID principles** adherence

```python
# TDD naturally produces this design
class EmailService:
    def __init__(self, smtp_client):  # Dependency injection for testing
        self.smtp_client = smtp_client

    def send(self, email):  # Single responsibility
        if not self.validate(email):  # Small, testable methods
            raise ValueError()
        return self.smtp_client.send(email)
```

---

### Refactoring Purpose

1. **Improves readability**
2. **Reduces complexity**
3. **Eliminates duplication**
4. **Improves performance**
5. **Prepares for new features**

---

### Code Comments Best Practices

```java
// Bad - explains what
// Increment i by 1
i++;

// Good - explains why
// We skip the header row when processing CSV data
i = 1;

// Better - self-documenting code
int firstDataRow = 1; // Skip header
for (int row = firstDataRow; row < data.length; row++) {
    processRow(data[row]);
}
```

---

### Design vs Architecture

- **Architecture**: High-level structure, technology choices, system boundaries
- **Design**: Lower-level decisions, class structures, patterns within components

Examples:

- Architecture: "Microservices with Kafka messaging"
- Design: "Use Strategy pattern for payment processing"

---

### Multiple Inheritance Impact

```java
// Diamond Problem in C++
class A { virtual void method(); }
class B : public A { }
class C : public A { }
class D : public B, public C { } // Which A::method?

// Java Interfaces - Cleaner
interface Flyable { void fly(); }
interface Swimmable { void swim(); }
class Duck implements Flyable, Swimmable { }

// Delegation - Most explicit
class Duck {
    private FlyingBehavior flyer = new FlyingBehavior();
    private SwimmingBehavior swimmer = new SwimmingBehavior();

    public void fly() { flyer.fly(); }
    public void swim() { swimmer.swim(); }
}
```

---

### Domain Logic in Stored Procedures

**Pros:**

- Performance (close to data)
- Centralized business rules
- Database-level consistency

**Cons:**

- Hard to version control
- Difficult to test
- Vendor lock-in
- Limited debugging tools
- Splits logic across tiers

---

### Detecting Bad Design

**Code Smells:**

```python
# 1. Long methods
def process_order(order):
    # 200 lines of code...

# 2. Feature envy
class Order:
    def calculate_total(self, customer):
        discount = customer.loyalty_points * customer.tier.multiplier
        # Using more customer data than order data

# 3. Shotgun surgery - changing one feature requires many file edits
# 4. Large classes doing too much
# 5. Duplicate code
# 6. Long parameter lists
```

---

## Programming Languages

### Three Worst Defects (Java Example)

1. **Type Erasure**: Generics information lost at runtime
2. **Checked Exceptions**: Force handling even when inappropriate
3. **Verbose Syntax**: Boilerplate code requirements

---

### Functional Programming Rising Interest

1. **Concurrency** - Immutability prevents race conditions
2. **Testability** - Pure functions are predictable
3. **Composability** - Functions compose naturally
4. **Modern hardware** - Multi-core processors
5. **Bug reduction** - No side effects

---

### Closures

**Definition**: Functions that capture variables from enclosing scope.

```javascript
function createCounter() {
  let count = 0; // Captured by closure
  return function () {
    return ++count;
  };
}

const counter = createCounter();
counter(); // 1
counter(); // 2
```

**Similarity to classes**: Both encapsulate state and behavior.

---

### Generics

**Purpose**: Type-safe code reuse without casting.

```java
// Without generics
List list = new ArrayList();
list.add("string");
String s = (String) list.get(0); // Unsafe cast

// With generics
List<String> list = new ArrayList<>();
list.add("string");
String s = list.get(0); // Type safe
```

---

### Higher-Order Functions

Functions that take or return other functions.

```python
# Takes function as parameter
def apply_twice(func, value):
    return func(func(value))

# Returns a function
def make_multiplier(n):
    return lambda x: x * n

double = make_multiplier(2)
result = apply_twice(double, 5)  # 20
```

---

### Loop to Recursion

```javascript
// Loop
function sumArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// Recursive with immutability
function sumArrayRecursive(arr) {
  if (arr.length === 0) return 0;
  const [head, ...tail] = arr; // Destructuring, immutable
  return head + sumArrayRecursive(tail);
}

// Tail-recursive optimization
function sumArrayTailRec(arr, acc = 0) {
  if (arr.length === 0) return acc;
  const [head, ...tail] = arr;
  return sumArrayTailRec(tail, acc + head);
}
```

---

### Functions as First-Class Citizens

Functions can be:

- Assigned to variables
- Passed as arguments
- Returned from functions
- Stored in data structures

```python
# All first-class operations
functions = [print, len, str]  # Stored in list
my_func = print  # Assigned to variable
map(str, [1, 2, 3])  # Passed as argument
def get_printer():
    return print  # Returned from function
```

---

### Anonymous Functions

```python
# Sorting with custom key
users = [{'name': 'Alice', 'age': 30}, {'name': 'Bob', 'age': 25}]
users.sort(key=lambda u: u['age'])  # Anonymous function as key

# Event handlers
button.onclick = lambda e: print(f"Clicked at {e.x}, {e.y}")

# Map/filter/reduce
squared = map(lambda x: x**2, numbers)
```

---

### Type Systems

**Static vs Dynamic:**

- **Static**: Types checked at compile time (Java, C++)
- **Dynamic**: Types checked at runtime (Python, JavaScript)

**Strong vs Weak:**

- **Strong**: No implicit conversions (Python, Java)
- **Weak**: Implicit conversions (JavaScript, C)

---

### Referential Transparency

```haskell
-- Referentially transparent (pure)
add x y = x + y
result = add 2 3  -- Can replace with 5 anywhere

-- Referentially opaque (impure)
getCurrentTime :: IO Time
printLine :: String -> IO ()
-- Cannot replace with value, depends on external state
```

---

### Stack vs Heap

**Stack:**

- Local variables
- Function parameters
- Return addresses
- Fast allocation/deallocation
- Limited size

**Heap:**

- Dynamic allocation
- Objects/arrays
- Slower allocation
- Garbage collected
- Larger size

**Stack Overflow**: Recursion too deep or large local arrays.

---

### Pattern Matching

```scala
// Pattern matching (Scala)
def describe(x: Any) = x match {
  case 0 => "zero"
  case i: Int if i > 0 => "positive"
  case s: String => s"string: $s"
  case list: List[_] => s"list of ${list.size}"
  case _ => "unknown"
}

// vs Switch (limited)
switch(x) {
  case 0: return "zero";
  case 1: return "one";
  default: return "other";
}
```

---

### Languages Without Exceptions

**Go Example:**

```go
// No exceptions, explicit error handling
result, err := doSomething()
if err != nil {
    return nil, err
}
```

**Pros**: Explicit error paths, no hidden control flow  
**Cons**: Verbose, easy to ignore errors

---

### Variance in Generics

```java
// Covariance: Cat extends Animal
List<? extends Animal> animals = new ArrayList<Cat>(); // OK

// Contravariance
Comparator<Animal> animalComp = ...;
Comparator<? super Cat> catComp = animalComp; // OK

// Invariance (default)
List<Animal> != List<Cat>  // Not related
```

---

## Web Development

### First vs Third-Party Cookies

**First-Party**: Set by visited domain

- Trusted more
- Used for sessions, preferences
- Not blocked by default

**Third-Party**: Set by different domain

- Used for tracking
- Often blocked
- Privacy concerns

```javascript
// First-party
document.cookie = "session=abc123; domain=.example.com";

// Third-party (from embedded ad)
// Set by adserver.net while on example.com
```

---

### API Versioning Strategies

```python
# 1. URL Versioning
GET /api/v1/users
GET /api/v2/users

# 2. Header Versioning
GET /api/users
Accept: application/vnd.myapp.v2+json

# 3. Query Parameter
GET /api/users?version=2

# 4. Semantic Versioning + Backwards Compatibility
{
    "name": "John",  # v1 field
    "full_name": {   # v2 addition
        "first": "John",
        "last": "Doe"
    }
}
```

---

### SPA Disadvantages (Backend Perspective)

1. **SEO challenges** - Need SSR or pre-rendering
2. **Initial load** - Large JavaScript bundles
3. **Session management** - Complex token refresh
4. **CORS complexity**
5. **API versioning** - Frontend/backend coupling

---

### Statelessness Benefits

```python
# Stateless - Scalable
def process_request(request, db):
    user = db.get_user(request.user_id)
    # No server-side session state
    return response

# Stateful - Hard to scale
class Server:
    def __init__(self):
        self.sessions = {}  # Server state

    def process(self, request):
        session = self.sessions[request.session_id]
        # Tied to specific server
```

Benefits: Horizontal scaling, fault tolerance, caching

---

### REST vs SOAP

**REST:**

- Simple, uses HTTP verbs
- Stateless
- Multiple formats (JSON, XML)
- Cacheable

**SOAP:**

- Protocol-independent
- Built-in error handling
- WS-Security
- ACID transactions

**When to use:**

- REST: Public APIs, mobile apps, microservices
- SOAP: Enterprise, financial systems, formal contracts

---

### MVC and MVVM

**MVC:**

```python
# Model
class User:
    def __init__(self, name):
        self.name = name

# View
class UserView:
    def render(self, user):
        return f"<h1>{user.name}</h1>"

# Controller
class UserController:
    def show(self, user_id):
        user = User.get(user_id)
        return UserView().render(user)
```

**MVVM**: View binds to ViewModel, which wraps Model

- Two-way data binding
- Better for complex UIs
- Popular in frontend (Angular, Vue)

---

## Databases

### Database Migration Strategy

**MySQL to PostgreSQL:**

```sql
-- MySQL
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- PostgreSQL
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
```

**Migration Steps:**

1. Dual writes during transition
2. Data validation
3. Feature flags for cutover
4. Rollback plan

---

### NULL in SQL

**Why `WHERE field = NULL` doesn't work:**

- NULL represents unknown
- Unknown = Unknown is Unknown (not TRUE)
- Must use `IS NULL`

```sql
-- Wrong
SELECT * FROM users WHERE age = NULL;  -- Returns nothing

-- Correct
SELECT * FROM users WHERE age IS NULL;

-- Three-valued logic
NULL = NULL  -- Results in NULL, not TRUE
```

---

### ACID Properties

- **Atomicity**: Transactions are all-or-nothing
- **Consistency**: Database remains valid after transactions
- **Isolation**: Concurrent transactions don't interfere
- **Durability**: Committed changes persist

---

### Schema Migration Management

```python
# Migration framework example
class Migration_001_AddUserTable:
    def up(self):
        execute("""
            CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                email VARCHAR(255) UNIQUE
            )
        """)

    def down(self):
        execute("DROP TABLE users")

# Version tracking
CREATE TABLE schema_migrations (
    version VARCHAR(255) PRIMARY KEY,
    applied_at TIMESTAMP
);
```

---

### Lazy Loading

```python
class User:
    def __init__(self, id):
        self.id = id
        self._orders = None

    @property
    def orders(self):
        if self._orders is None:
            self._orders = Order.fetch_by_user(self.id)
        return self._orders
```

**Pitfalls**: N+1 queries, unexpected database hits, transaction boundaries

---

### N+1 Problem

```sql
-- N+1 Problem
SELECT * FROM users WHERE active = true; -- 1 query
-- Then for each user:
SELECT * FROM orders WHERE user_id = ?; -- N queries

-- Solution: Join or Include
SELECT users.*, orders.*
FROM users
LEFT JOIN orders ON users.id = orders.user_id
WHERE users.active = true; -- 1 query total
```

---

### Finding Expensive Queries

```sql
-- PostgreSQL
SELECT query,
       mean_exec_time,
       calls,
       total_exec_time
FROM pg_stat_statements
ORDER BY mean_exec_time DESC
LIMIT 10;

-- MySQL
SET GLOBAL slow_query_log = 'ON';
SET GLOBAL long_query_time = 2;
```

---

### Normalization vs Denormalization

**Normalize when:**

- Data integrity critical
- Write-heavy workloads
- Storage expensive

**Denormalize when:**

- Read performance critical
- Analytics/reporting
- Real-time queries needed

```sql
-- Normalized
SELECT u.name, COUNT(o.id)
FROM users u
JOIN orders o ON u.id = o.user_id
GROUP BY u.id;

-- Denormalized
SELECT name, order_count
FROM user_stats;  -- Pre-calculated
```

---

### Blue-Green Deployment with DB Changes

**Expand-Contract Pattern:**

```sql
-- Phase 1: Add new column (expand)
ALTER TABLE users ADD COLUMN email_verified BOOLEAN;

-- Phase 2: Dual writes
-- Phase 3: Migrate data
UPDATE users SET email_verified = true WHERE email_confirmed_at IS NOT NULL;

-- Phase 4: Switch reads to new column
-- Phase 5: Remove old column (contract)
ALTER TABLE users DROP COLUMN email_confirmed_at;
```

---

## NoSQL

### Eventual Consistency

System will become consistent over time, but may show different values temporarily.

**Example**: Social media view counts - different servers might show slightly different numbers, but eventually converge.

---

### CAP Theorem

You can only guarantee 2 of 3:

- **Consistency**: All nodes see same data
- **Availability**: System remains operational
- **Partition Tolerance**: System continues despite network failures

**Examples:**

- **CP Systems**: HBase, MongoDB (strong consistency)
- **AP Systems**: Cassandra, DynamoDB (eventual consistency)
- **CA Systems**: Traditional RDBMS (impractical in distributed settings)

---

### NoSQL Scalability Approaches

```python
# Sharding example
def get_shard(key):
    return hash(key) % NUM_SHARDS

# Consistent hashing for dynamic scaling
class ConsistentHash:
    def __init__(self):
        self.ring = {}
        self.sorted_keys = []

    def add_node(self, node):
        for i in range(150):  # Virtual nodes
            virtual = f"{node}:{i}"
            hash_val = hash(virtual)
            self.ring[hash_val] = node
```

---

### Document vs Relational

**Use Document DB when:**

- Hierarchical data
- Varying schemas
- Rapid development
- Read-heavy workloads

**Use Relational when:**

- ACID required
- Complex joins
- Established schemas
- Reporting/analytics

---

## Version Control

### Easier Branching in Git/Mercurial

**Why easier than SVN:**

1. **Local branches** - No server communication
2. **Lightweight** - Branches are pointers
3. **Fast switching** - Instant context switch
4. **Better merging** - Tracks common ancestors

```bash
# Git - Easy branching
git checkout -b feature
# Work...
git checkout main
git merge feature

# SVN - Cumbersome
svn copy trunk branches/feature  # Server operation
svn switch branches/feature
```

---

### DVCS Pros and Cons

**Pros:**

- Work offline
- Fast operations
- Full history locally
- Flexible workflows
- Natural backup

**Cons:**

- Large repositories problematic
- Steeper learning curve
- Security (full history distributed)

---

### GitFlow vs GitHub Flow

**GitFlow:**

```bash
# Multiple branches
main (production)
develop (integration)
feature/* (features)
release/* (release prep)
hotfix/* (emergency fixes)
```

**GitHub Flow:**

```bash
# Simplified
main (always deployable)
feature branches (short-lived)
# Deploy from feature branch
# Merge after verification
```

---

### Git Rebase

```bash
# Before rebase
      A---B---C feature
     /
D---E---F---G main

# After rebase
              A'--B'--C' feature
             /
D---E---F---G main

git checkout feature
git rebase main
```

⚠️ **Caution**: Never rebase public branches

---

## Concurrency

### Why We Need Concurrency

1. **CPU utilization** - Don't waste cycles waiting for I/O
2. **Responsiveness** - UI remains interactive
3. **Throughput** - Handle multiple requests
4. **Real-world modeling** - Natural parallelism

```python
# Without concurrency - Sequential
def process_files(files):
    for file in files:
        data = read_file(file)  # Blocks
        process(data)
        write_result(data)

# With concurrency - Parallel
async def process_files(files):
    tasks = [process_file(f) for f in files]
    await asyncio.gather(*tasks)
```

---

### Testing Concurrent Code Difficulties

1. **Non-determinism** - Different execution orders
2. **Timing issues** - Race conditions intermittent
3. **Deadlock** - May only occur under load
4. **Shared state** - Unexpected interactions

```java
// Hard to test race condition
class Counter {
    private int count = 0;

    public void increment() {
        count++;  // Race condition, but test might pass
    }
}
```

---

### Race Condition Example

```java
public class Counter {
    private int count = 0;

    // Race condition - multiple threads can read-modify-write simultaneously
    public void increment() {
        count++; // Not atomic: read, increment, write
    }

    // Fixed version
    private AtomicInteger atomicCount = new AtomicInteger(0);

    public void safeIncrement() {
        atomicCount.incrementAndGet(); // Atomic operation
    }
}
```

---

### Deadlock Example

```java
public class BankAccount {
    private final Object lock = new Object();
    private double balance;

    public void transfer(BankAccount to, double amount) {
        synchronized(this.lock) {  // Lock this account
            synchronized(to.lock) {  // Lock other account
                this.balance -= amount;
                to.balance += amount;
            }
        }
    }
}

// Deadlock scenario:
// Thread 1: account1.transfer(account2, 100)
// Thread 2: account2.transfer(account1, 50)
// Thread 1 locks account1, Thread 2 locks account2
// Both wait forever for the other lock
```

---

### Process Starvation

```java
// High priority threads starve low priority
class TaskScheduler {
    PriorityQueue<Task> highPriority = new PriorityQueue<>();
    PriorityQueue<Task> lowPriority = new PriorityQueue<>();

    public Task getNext() {
        // Low priority tasks starve if high priority keeps coming
        if (!highPriority.isEmpty()) {
            return highPriority.poll();
        }
        return lowPriority.poll();
    }
}

// Solution: Aging or fair scheduling
```

---

### Wait-Free Algorithm

Every thread completes in bounded steps regardless of other threads.

```java
// Wait-free example using AtomicReference
public class WaitFreeStack<T> {
    private AtomicReference<Node<T>> head = new AtomicReference<>();

    public void push(T value) {
        Node<T> newHead = new Node<>(value);
        Node<T> oldHead;
        do {
            oldHead = head.get();
            newHead.next = oldHead;
        } while (!head.compareAndSet(oldHead, newHead));
        // Guaranteed to complete eventually
    }
}
```

---

## Distributed Systems

### Testing Distributed Systems

**Strategies:**

1. **Chaos Engineering:**

```python
# Randomly kill services
def chaos_monkey():
    service = random.choice(services)
    service.kill()
    time.sleep(random.randint(1, 60))
    service.restart()
```

2. **Contract Testing**: Verify API contracts
3. **Distributed Tracing**: Zipkin, Jaeger
4. **Fault Injection**: Network delays, partitions
5. **Property-Based Testing**: Test invariants

---

### Async Communication Use Cases

**When to use:**

- Long-running operations
- Fire-and-forget tasks
- Decoupling services
- Handling traffic spikes

```python
# Synchronous - Blocks
response = payment_service.process(order)
if response.success:
    send_email(order)

# Asynchronous - Non-blocking
queue.publish({
    'type': 'process_payment',
    'order': order
})
# Payment service processes when ready
```

---

### RPC Pitfalls

1. **Network failures** look like application errors
2. **Latency** unpredictable
3. **Ordering** not guaranteed
4. **Partial failures** complex
5. **Debugging** across systems

---

### Distributed System Design Considerations

**Closed/Secure Network:**

- Trust between nodes
- Reliable network
- Predictable latency
- Centralized monitoring

**Public/Geographic:**

- Authentication required
- Network partitions common
- Variable latency
- Edge caching critical
- DDoS protection

---

### Fallacies of Distributed Computing

1. **Network is reliable** - It's not
2. **Latency is zero** - It's significant
3. **Bandwidth is infinite** - It's limited
4. **Network is secure** - Needs encryption
5. **Topology doesn't change** - It does
6. **One administrator** - Multiple owners
7. **Transport cost is zero** - Data transfer costs
8. **Network is homogeneous** - Different protocols

---

### Request/Reply vs Publish/Subscribe

**Request/Reply:**

```python
# Direct communication
response = service.request(data)
```

Use for: Queries, synchronous operations, known recipients

**Publish/Subscribe:**

```python
# Indirect communication
publisher.publish('user.created', user_data)
# Multiple subscribers handle independently
```

Use for: Events, notifications, decoupling, fan-out

---

### Implementing Transactions from Scratch

```python
class Transaction:
    def __init__(self):
        self.operations = []
        self.rollback_operations = []

    def add_operation(self, do_op, undo_op):
        self.operations.append(do_op)
        self.rollback_operations.append(undo_op)

    def commit(self):
        completed = []
        try:
            for op in self.operations:
                op()
                completed.append(op)
        except Exception:
            # Rollback in reverse order
            for undo_op in reversed(self.rollback_operations[:len(completed)]):
                undo_op()
            raise
```

---

## Software Lifecycle & Team Management

### What is Agility

**Definition**: Ability to respond to change quickly and effectively

- Iterative development
- Customer collaboration
- Continuous feedback
- Adaptive planning

---

### Legacy Code Management

**Strategies:**

1. **Characterization tests** - Document current behavior
2. **Refactor incrementally** - Small, safe changes
3. **Strangler pattern** - Gradually replace
4. **Add tests before changes**

```python
# Dealing with legacy code
class LegacyCalculator:
    def calc(self, a, b, op):  # No tests, unclear logic
        if op == 1:
            return a + b * 2  # Why *2?
        # ... 100 more lines

# Step 1: Write characterization tests
def test_existing_behavior():
    assert calc(2, 3, 1) == 8  # Document current behavior

# Step 2: Refactor gradually
class ModernCalculator:
    def calculate(self, a, b, operation):
        # Clear, tested implementation
```

---

### Legacy Code ELI5

"Legacy code is like an old house - it still works, but it's hard to renovate because we don't know what might break if we change something. Without proper documentation (blueprints) and tests (safety inspections), making improvements is risky and expensive. Code quality matters because poor quality code becomes expensive to maintain and slows down new feature development."

---

### Selling Kanban

"Kanban visualizes our work pipeline, limits work-in-progress, and identifies bottlenecks.

**Benefits:**

- 30% faster delivery (measured)
- Reduced context switching
- Clear priorities
- Predictable delivery dates
- No major process overhaul needed

**ROI**: Teams typically see 20-30% productivity improvement within 3 months."

---

### Agile vs Waterfall

**Biggest difference**: Response to change

```
Waterfall: Requirements → Design → Implementation → Testing → Deployment
Agile: Sprint 1 → Review → Sprint 2 → Review → Sprint 3...
```

---

### Managing Too Many Meetings

1. **No-meeting blocks** - Protected coding time
2. **Async updates** - Written standups
3. **Meeting audit** - Cancel non-valuable meetings
4. **Delegate attendance** - Rotate representatives
5. **Time-box strictly** - 25/50 minute meetings

---

### Managing Late Projects

1. **Assess honestly** - How late? Why?
2. **Re-scope** - Cut features, not quality
3. **Parallel work** - Identify independent tasks
4. **Add resources carefully** - Brooks' Law
5. **Communicate transparently** - Regular updates
6. **Post-mortem** - Learn for next time

---

### Managing High Turnover

**Without increasing compensation:**

1. **Career development** - Clear growth paths
2. **Technical challenges** - Interesting projects
3. **Autonomy** - Trust and ownership
4. **Recognition** - Public appreciation
5. **Work-life balance** - Flexible hours
6. **Team culture** - Psychological safety
7. **Modern tech stack** - Keep skills relevant

---

### Top 3 Colleague Qualities

1. **Communication** - Clear, honest, respectful
2. **Reliability** - Delivers on commitments
3. **Growth mindset** - Learns from mistakes, shares knowledge

---

### Things Non-Technical People Should Know

1. **Estimates are probabilities**, not promises
2. **Technical debt** is like financial debt - pays interest
3. **Good code takes time** upfront but saves time long-term

---

## Algorithms & Logic

### FIFO Queue Using LIFO Stacks

```python
class QueueUsingStacks:
    def __init__(self):
        self.inbox = []   # LIFO stack for enqueue
        self.outbox = []  # LIFO stack for dequeue

    def enqueue(self, item):
        self.inbox.append(item)

    def dequeue(self):
        if not self.outbox:  # Transfer when needed
            while self.inbox:
                self.outbox.append(self.inbox.pop())
        return self.outbox.pop() if self.outbox else None
```

---

### Stack Overflow Code

```c
// Recursive without base case
int factorial(int n) {
    return n * factorial(n - 1);  // No base case!
}

// Large local array
void causeOverflow() {
    int huge[10000000];  // Too large for stack
}
```

---

### Tail-Recursive Factorial

```scala
// Not tail-recursive (builds call stack)
def factorial(n: Int): Int = {
    if (n <= 1) 1
    else n * factorial(n - 1)  // Operation after recursion
}

// Tail-recursive (optimizable to loop)
def factorialTail(n: Int, acc: Int = 1): Int = {
    if (n <= 1) acc
    else factorialTail(n - 1, n * acc)  // Recursion is last operation
}
```

---

### Simple REPL / RPN Calculator

```python
# Basic REPL
while True:
    user_input = input("> ")
    if user_input == "exit":
        break
    print(user_input)

# RPN Calculator
def rpn_calc():
    stack = []
    while True:
        token = input("> ")
        if token in ['+', '-', '*', '/']:
            b, a = stack.pop(), stack.pop()
            if token == '+': stack.append(a + b)
            elif token == '-': stack.append(a - b)
            elif token == '*': stack.append(a * b)
            elif token == '/': stack.append(a / b)
        else:
            stack.append(float(token))
        print(f"Stack: {stack}")
```

---

### Memory Leak Example

```java
public class MemoryLeak {
    private static List<Object> leak = new ArrayList<>();

    public void addButNeverRemove() {
        leak.add(new byte[1000000]);  // Keeps growing
    }
}

// JavaScript closure leak
function createLeak() {
    let huge = new Array(1000000);
    return function() {
        console.log(huge.length);  // Closure keeps huge alive
    };
}
```

---

### Unique Random Numbers

```python
import random

class UniqueRandomGenerator:
    def __init__(self, min_val, max_val):
        self.available = list(range(min_val, max_val + 1))
        random.shuffle(self.available)
        self.index = 0

    def next(self):
        if self.index >= len(self.available):
            raise ValueError("All numbers used")
        value = self.available[self.index]
        self.index += 1
        return value
```

---

### Basic Message Broker

```python
import queue
import threading

class SimpleBroker:
    def __init__(self):
        self.topics = {}

    def subscribe(self, topic, callback):
        if topic not in self.topics:
            self.topics[topic] = []
        self.topics[topic].append(callback)

    def publish(self, topic, message):
        if topic in self.topics:
            for callback in self.topics[topic]:
                threading.Thread(
                    target=callback,
                    args=(message,)
                ).start()
```

---

### Sorting Large Files

**10GB File:**

```python
def sort_large_file(filename):
    # External merge sort
    chunk_files = []
    with open(filename) as f:
        chunk = []
        for line in f:
            chunk.append(line)
            if len(chunk) >= 1000000:  # 1M lines per chunk
                chunk.sort()
                chunk_file = write_chunk(chunk)
                chunk_files.append(chunk_file)
                chunk = []

    # Merge sorted chunks
    return merge_files(chunk_files)
```

**10TB File:**

- Use distributed sorting (MapReduce)
- Multiple machines sort chunks
- Distributed merge phase

---

### Detecting Duplicates

```python
import hashlib

def find_duplicates(directory):
    hashes = {}
    for filepath in walk_directory(directory):
        file_hash = calculate_hash(filepath)
        if file_hash in hashes:
            print(f"Duplicate: {filepath} = {hashes[file_hash]}")
        else:
            hashes[file_hash] = filepath

def calculate_hash(filepath, chunk_size=8192):
    hasher = hashlib.md5()
    with open(filepath, 'rb') as f:
        while chunk := f.read(chunk_size):
            hasher.update(chunk)
    return hasher.hexdigest()
```

---

## Software Architecture

### When Cache is Dangerous

1. **Stale data** in critical operations (payments)
2. **Cache stampede** - Multiple misses trigger parallel fetches
3. **Memory pressure** - Caching too much
4. **Consistency issues** - Distributed cache sync

```python
# Dangerous caching
@cache(timeout=3600)
def get_account_balance(user_id):
    return db.query(...)  # Cached balance could be wrong!
```

---

### Event-Driven Architecture Scalability

**Benefits:**

1. **Decoupling** - Services independent
2. **Async processing** - No blocking
3. **Load leveling** - Queue absorbs spikes
4. **Parallelism** - Multiple consumers

```python
# Event-driven scaling
class OrderService:
    def create_order(self, order):
        # Just publish event, don't wait
        event_bus.publish('order.created', order)
        return order.id

# Multiple services handle independently
class EmailService:
    @subscribe('order.created')
    def send_confirmation(self, order): pass

class InventoryService:
    @subscribe('order.created')
    def reserve_items(self, order): pass
```

---

### Code Readability Factors

1. **Clear naming** - Self-documenting
2. **Consistent style** - Predictable patterns
3. **Small functions** - Single purpose
4. **Good abstractions** - Hide complexity
5. **Meaningful comments** - Explain why

---

### Scale-Out vs Scale-Up

**Scale-Up (Vertical):**

- Add CPU/RAM to existing server
- Simpler architecture
- Hardware limits
- Single point of failure

**Scale-Out (Horizontal):**

- Add more servers
- Complex coordination
- Theoretically unlimited
- Fault tolerant

---

### CQRS

**Command Query Responsibility Segregation:**

```python
# Separate models for reads/writes
class WriteModel:
    def create_order(self, data):
        # Optimized for writes
        order = Order.create(data)
        event_store.append('OrderCreated', order)

class ReadModel:
    def get_order_summary(self):
        # Optimized for reads (denormalized)
        return read_db.query("SELECT * FROM order_summary_view")
```

---

### C10k Problem Solutions

1. **Event-driven I/O** (epoll, kqueue)
2. **Async frameworks** (Node.js, Netty)
3. **User-space networking** (DPDK)
4. **Connection pooling**
5. **Load balancing**

```c
// Traditional - Thread per connection (doesn't scale)
while (1) {
    int client = accept(server_socket);
    pthread_create(&thread, NULL, handle_client, client);
}

// Event-driven - Single thread, many connections
epoll_wait(epfd, events, MAX_EVENTS, -1);
for (int i = 0; i < n; i++) {
    handle_event(events[i]);
}
```

---

### P2P System Design

```python
class P2PNode:
    def __init__(self):
        self.peers = []
        self.files = {}
        self.dht = DistributedHashTable()

    def join_network(self, bootstrap_peer):
        # Get initial peers
        self.peers = bootstrap_peer.get_peers()
        # Announce presence
        self.broadcast('node_joined', self.id)

    def find_file(self, file_hash):
        # Query DHT
        peer = self.dht.lookup(file_hash)
        return self.download_from(peer, file_hash)
```

---

### Vendor Lock-in Defense

```python
# Abstraction layer
class StorageInterface:
    def store(self, key, data): pass

class S3Storage(StorageInterface):
    def store(self, key, data):
        boto3.client('s3').put_object(...)

class AzureStorage(StorageInterface):
    def store(self, key, data):
        azure.storage.blob.upload(...)
```

---

### Cloud Readiness Characteristics

1. **Stateless** - Horizontal scaling
2. **Containerized** - Portable deployment
3. **Config externalized** - Environment-specific
4. **Service discovery** - Dynamic endpoints
5. **Circuit breakers** - Fault tolerance
6. **Health checks** - Auto-recovery
7. **Metrics/logging** - Observability

---

## SOA and Microservices

### Long-lived Transactions Problem

**Why discouraged**: Locks resources, complex rollback, distributed coordination hard

**Saga Pattern:**

```python
class OrderSaga:
    def execute(self):
        try:
            payment_id = payment_service.reserve(amount)
            inventory_id = inventory_service.reserve(items)
            shipping_id = shipping_service.schedule()
            payment_service.confirm(payment_id)
        except:
            # Compensate in reverse order
            shipping_service.cancel(shipping_id)
            inventory_service.release(inventory_id)
            payment_service.release(payment_id)
```

---

### SOA vs Microservices

**SOA:**

- Enterprise-wide
- ESB communication
- Shared databases common
- SOAP/XML often

**Microservices:**

- Team-owned services
- Direct communication
- Database per service
- REST/JSON common
- DevOps culture

---

### Transaction vs Compensation

```python
# Transaction
with db.transaction():
    db.debit_account(from_acc, amount)
    db.credit_account(to_acc, amount)
    # Both succeed or both fail

# Compensation
def transfer_saga():
    debit_id = debit_account(from_acc, amount)
    try:
        credit_account(to_acc, amount)
    except:
        compensate_debit(debit_id)  # Undo the debit
```

---

### When Microservice Too Micro

Signs of too granular:

1. **Excessive network calls** between services
2. **Deployment dependencies** - Always deployed together
3. **Shared database** required
4. **Single developer** owns multiple services
5. **CRUD only** - No business logic

---

### Microservices Pros/Cons

**Pros:**

- Independent deployment
- Technology diversity
- Fault isolation
- Team autonomy
- Scalability

**Cons:**

- Distributed complexity
- Network latency
- Data consistency challenges
- Operational overhead
- Testing complexity

---

## Security

### Writing Secure Code

**Practices:**

1. Input validation
2. Parameterized queries
3. Principle of least privilege
4. Secure defaults
5. Regular security reviews

**Developer duty vs specialized**: Both - developers need security awareness, specialists for architecture and audits

---

### Don't Invent Cryptography

**Why not:**

- Subtle vulnerabilities
- Years of cryptanalysis needed
- Side-channel attacks
- Implementation pitfalls

```python
# Bad - Custom "encryption"
def bad_encrypt(data, key):
    return ''.join(chr(ord(c) ^ key) for c in data)

# Good - Use established library
from cryptography.fernet import Fernet
key = Fernet.generate_key()
f = Fernet(key)
encrypted = f.encrypt(data)
```

---

### Two-Factor Authentication

```python
import pyotp
import qrcode

class TwoFactorAuth:
    def setup_2fa(self, user):
        # Generate secret
        secret = pyotp.random_base32()
        user.tfa_secret = secret

        # Generate QR code for authenticator app
        uri = pyotp.totp.TOTP(secret).provisioning_uri(
            user.email,
            issuer_name="MyApp"
        )
        qr = qrcode.make(uri)
        return qr

    def verify_code(self, user, code):
        totp = pyotp.TOTP(user.tfa_secret)
        return totp.verify(code, valid_window=1)
```

---

### Preventing Sensitive Data in Logs

```python
class SecureLogger:
    SENSITIVE_FIELDS = ['password', 'ssn', 'credit_card']

    def log(self, data):
        cleaned = self.sanitize(data)
        logger.info(cleaned)

    def sanitize(self, data):
        if isinstance(data, dict):
            return {
                k: '***' if k in self.SENSITIVE_FIELDS else v
                for k, v in data.items()
            }
        return data
```

---

### SQL Injection

**Vulnerable:**

```java
String query = "SELECT * FROM users WHERE name = '" + userInput + "'";
// If userInput = "admin' OR '1'='1", it returns all users
```

**Fixed:**

```java
PreparedStatement ps = connection.prepareStatement(
    "SELECT * FROM users WHERE name = ?"
);
ps.setString(1, userInput); // Parameterized query
```

---

### Cross-Site Scripting (XSS)

**Prevention:**

```javascript
// Bad
element.innerHTML = userInput; // Can execute scripts

// Good
element.textContent = userInput; // Treats as text only
// Or sanitize HTML
element.innerHTML = DOMPurify.sanitize(userInput);
```

---

### CSRF Protection

```python
# Generate token
def generate_csrf_token():
    token = secrets.token_urlsafe(32)
    session['csrf_token'] = token
    return token

# Validate on submission
def validate_csrf(request):
    token = request.form.get('csrf_token')
    if not token or token != session.get('csrf_token'):
        raise CSRFError()

# In template
<form method="POST">
    <input type="hidden" name="csrf_token" value="{{ csrf_token }}">
</form>
```

---

### HTTPS Working

1. **Client Hello** - Supported ciphers
2. **Server Hello** - Chosen cipher, certificate
3. **Certificate Verification** - Check CA signature
4. **Key Exchange** - Generate session keys
5. **Encrypted Communication** - Using session keys

---

### Session Hijacking Prevention

```python
# Secure session configuration
app.config['SESSION_COOKIE_SECURE'] = True  # HTTPS only
app.config['SESSION_COOKIE_HTTPONLY'] = True  # No JS access
app.config['SESSION_COOKIE_SAMESITE'] = 'Strict'
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(hours=1)
```

---

## General Questions

### Why Functional Programming Matters

1. **Concurrency** - No shared mutable state
2. **Reasoning** - Pure functions predictable
3. **Testing** - No side effects
4. **Composability** - Functions combine naturally
5. **Correctness** - Fewer bugs from immutability

---

### Browser Business Models

- **Google Chrome**: Ad revenue from search/data
- **Mozilla Firefox**: Search engine partnerships
- **Microsoft Edge**: Ecosystem lock-in, enterprise
- **Opera**: Partnerships, built-in services

---

### TCP Socket Overhead

1. **Three-way handshake** - RTT latency
2. **Kernel resources** - File descriptors, buffers
3. **State maintenance** - Connection tracking
4. **Slow start** - Congestion control

---

### Real-time Systems

**Differences:**

- **Deadlines** - Must meet timing constraints
- **Predictability** - Worst-case execution time
- **Priority** - Preemptive scheduling
- **Memory** - No unpredictable GC

---

### Immutability Benefits

```scala
// Immutable - Thread-safe, predictable
case class User(name: String, age: Int)
val user = User("John", 30)
val older = user.copy(age = 31)  // New object

// Mutable - Requires synchronization
class MutableUser {
    var name: String
    var age: Int  // Can change unexpectedly
}
```

---

### Object-Relational Impedance Mismatch

**Problems:**

- Objects: Inheritance, encapsulation, behavior
- Relations: Tables, rows, columns, joins

**Mismatches:**

- Inheritance mapping
- Object identity vs primary keys
- Associations vs foreign keys
- Encapsulation vs data access

---

### Cache Sizing Principles

1. **Working set size** - Frequently accessed data
2. **Hit rate target** - 80/20 rule often
3. **Memory constraints** - Available RAM
4. **Eviction cost** - Expense of cache miss
5. **Update frequency** - Invalidation rate

---

### TCP vs HTTP

**TCP**: Transport layer protocol

- Connection establishment
- Reliable delivery
- Flow control

**HTTP**: Application layer protocol

- Built on TCP
- Request/response model
- Stateless
- Headers and methods

---

### Client vs Server Rendering

**Client-Side (SPA):**

- Rich interactions
- Reduced server load
- Poor SEO
- Initial load time

**Server-Side (SSR):**

- Better SEO
- Faster initial paint
- Server load
- Full page refreshes

---

### Reliable Protocol over Unreliable

```python
class ReliableProtocol:
    def __init__(self, unreliable_channel):
        self.channel = unreliable_channel
        self.sent = {}  # Track sent messages
        self.received = set()  # Deduplication

    def send(self, data):
        msg_id = generate_id()
        packet = {
            'id': msg_id,
            'data': data,
            'checksum': calculate_checksum(data)
        }

        # Retry until acknowledged
        while msg_id not in self.acknowledged:
            self.channel.send(packet)
            wait_for_ack(timeout=1)

    def receive(self):
        packet = self.channel.receive()
        if validate_checksum(packet):
            if packet['id'] not in self.received:
                self.received.add(packet['id'])
                send_ack(packet['id'])
                return packet['data']
```

---

## Open Questions

### Why People Resist Change

1. **Fear of unknown** - Comfort in familiar
2. **Loss of control** - New processes uncertain
3. **Previous failures** - Bad experiences
4. **Invested effort** - Sunk cost in current way
5. **Social dynamics** - Peer pressure

---

### Threading ELI5

"Imagine a restaurant kitchen. With one chef (single thread), orders are cooked one at a time. With multiple chefs (multi-threading), several orders cook simultaneously. But they need to coordinate - if two chefs grab the same pan (shared resource), chaos ensues. That's why we need rules (synchronization) about who uses what when."

---

### Innovation vs Predictability

Balance through:

1. **Innovation sprints** - Dedicated exploration time
2. **Core/Edge** - Stable core, experimental edges
3. **Feature flags** - Safe experimentation
4. **Metrics-driven** - Measure innovation impact
5. **Risk budget** - Acceptable failure rate

---

### Good Code Characteristics

1. **Readable** - Self-documenting
2. **Testable** - Easy to verify
3. **Maintainable** - Easy to modify
4. **Efficient** - Appropriate performance
5. **Simple** - No unnecessary complexity

---

### Streaming Implementation

```python
def stream_file(filepath):
    chunk_size = 4096
    with open(filepath, 'rb') as f:
        while True:
            chunk = f.read(chunk_size)
            if not chunk:
                break
            yield chunk

# Usage
for chunk in stream_file('large_video.mp4'):
    send_to_client(chunk)
```

---

### Introducing CI/CD in Large Company

1. **Pilot project** - Prove value small scale
2. **Executive buy-in** - Show ROI metrics
3. **Training program** - Upskill teams
4. **Gradual rollout** - Department by department
5. **Tool selection** - Enterprise-ready solutions
6. **Cultural change** - DevOps mindset

---

### When to Reinvent the Wheel

**Justified when:**

- Core competency
- Specific requirements unmet
- Learning opportunity
- Performance critical
- Security requirements

---

### What Happens When You Type Google.com

1. **DNS lookup** - Resolve IP address
2. **TCP handshake** - Establish connection
3. **TLS negotiation** - Secure connection
4. **HTTP request** - GET /
5. **Server processing** - Generate response
6. **Response transfer** - HTML/CSS/JS
7. **Browser parsing** - Build DOM
8. **Resource fetching** - Images, scripts
9. **Rendering** - Paint pixels
10. **JavaScript execution** - Interactive page

---

### OS When Idle

- **Scheduler** runs idle process
- **Interrupts** handled (timer, I/O)
- **Power management** - CPU scaling
- **Background tasks** - GC, indexing
- **System calls** waiting
- **Context switches** ready

---

### Unicode to 5-Year-Old

"Imagine you have a big box of letters from all languages - English, Chinese, emoji. Unicode is like giving each letter a special number so computers everywhere know exactly which letter you mean. So when you send 😊 to grandma, her computer knows to show the same smiley!"

---

### Database Transactions to 5-Year-Old

"Imagine moving toys between two boxes. A transaction means either ALL toys move, or NONE move - never half. If you drop a toy midway, everything goes back to how it started. This keeps your toy boxes organized!"

---

### Defending Monoliths

**Advantages:**

1. **Simplicity** - One codebase, deployment
2. **Performance** - No network calls
3. **Transactions** - ACID guarantees easy
4. **Debugging** - Single process
5. **Development speed** - Initially faster
6. **Cost** - Less infrastructure

---

### People Who Like This Also Like

```python
class RecommendationEngine:
    def collaborative_filtering(self, user_id, item_id):
        # Find users who liked the same item
        similar_users = self.find_users_who_liked(item_id)

        # Find what else they liked
        other_items = {}
        for user in similar_users:
            for item in user.liked_items:
                if item != item_id:
                    other_items[item] = other_items.get(item, 0) + 1

        # Return most common
        return sorted(other_items.items(),
                     key=lambda x: x[1],
                     reverse=True)[:10]
```

---

### Why Corporations Slower than Startups

1. **Process overhead** - Multiple approvals
2. **Risk aversion** - Can't fail publicly
3. **Legacy systems** - Technical debt
4. **Politics** - Internal competition
5. **Size** - Communication overhead
6. **Incentives** - Optimized for stability

---

## Code Snippet Problems

### JavaScript Closure Issue

```javascript
function hookupevents() {
  for (var i = 0; i < 3; i++) {
    document
      .getElementById("button" + i)
      .addEventListener("click", function () {
        alert(i);
      });
  }
}
```

**Output**: Always alerts "3"  
**Why**: `var` is function-scoped, closures capture reference, not value

**Fix:**

```javascript
// Use let (block-scoped)
for (let i = 0; i < 3; i++) {
  // Each iteration has its own i
}

// Or IIFE
for (var i = 0; i < 3; i++) {
  (function (index) {
    document
      .getElementById("button" + index)
      .addEventListener("click", function () {
        alert(index);
      });
  })(i);
}
```

---

### Java Type Erasure

```java
ArrayList<Integer> li = new ArrayList<Integer>();
ArrayList<Float> lf = new ArrayList<Float>();
if (li.getClass() == lf.getClass()) // true
    System.out.println("Equal");
```

**Output**: "Equal"  
**Why**: Generics erased at runtime, both are just `ArrayList`

---

### Stack Memory Leak

```java
public Object pop() {
    if (size == 0)
        throw new EmptyStackException();
    return elements[--size];  // Leak: reference still held
}
```

**Fix:**

```java
public Object pop() {
    if (size == 0)
        throw new EmptyStackException();
    Object result = elements[--size];
    elements[size] = null;  // Clear reference
    return result;
}
```

---

### Eliminating Switch (Strategy Pattern)

```java
interface ResponseHandler {
    String handle(String input);
}

class FailHandler implements ResponseHandler {
    public String handle(String input) { return "error"; }
}

class OkHandler implements ResponseHandler {
    public String handle(String input) {
        return String.format("%s%s", input, input);
    }
}

class Formatter {
    private Map<String, ResponseHandler> handlers = Map.of(
        "FAIL", new FailHandler(),
        "OK", new OkHandler()
    );

    public String doTheJob(String input) {
        String response = service.askForPermission();
        return handlers.getOrDefault(response, i -> null).handle(input);
    }
}
```

---

### Eliminating If Chains

```java
public String Execute(String file) {
    String rewrittenUrl = fileHandler.getXmlFileFromFileName(file);
    if (rewrittenUrl.isEmpty()) return "";

    String executionId = fileHandler.getExecutionIdFromFileName(file);
    if (executionId.isEmpty()) return "";

    Foo knownFoo = fooRepository.getFooByXmlFileName(rewrittenUrl);
    if (knownFoo == null) return "";

    return knownFoo.DoThat(file);
}
```

---

### Refactoring Nested Ifs

```c
HRESULT error = S_OK;
error = Operation1();
if (FAILED(error)) return OPERATION1FAILED;

error = Operation2();
if (FAILED(error)) return OPERATION2FAILED;

error = Operation3();
if (FAILED(error)) return OPERATION3FAILED;

error = Operation4();
if (FAILED(error)) return OPERATION4FAILED;

return S_OK;
```

---

### Defend COBOL

1. **Reliability** - Powers 70% of business transactions
2. **Decimal arithmetic** - Perfect for finance
3. **Readability** - English-like syntax
4. **Stability** - Proven over 60 years
5. **Performance** - Optimized compilers

---

### Advice to Younger Self

1. **Focus on fundamentals** - Algorithms, systems design
2. **Build real projects** - Theory isn't enough
3. **Contribute to open source** - Learn from experts
4. **Network early** - Relationships matter
5. **Learn to communicate** - Technical skills aren't everything

---

## Additional Resources

### Books

- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "Clean Code" by Robert Martin
- "The Pragmatic Programmer" by Andrew Hunt and David Thomas
- "Cracking the Coding Interview" by Gayle Laakmann McDowell

### Online Resources

- System Design Primer (GitHub)
- LeetCode (Algorithms practice)
- HackerRank (Coding challenges)
- Pramp (Mock interviews)
- High Scalability (Architecture case studies)

### Key Technologies to Master

- **Languages**: Java, Python, Go, JavaScript
- **Databases**: MySQL, PostgreSQL, Redis, MongoDB
- **Message Queues**: Kafka, RabbitMQ, AWS SQS
- **Cloud**: AWS, GCP, Azure basics
- **Containers**: Docker, Kubernetes
- **CI/CD**: Jenkins, GitHub Actions
- **Monitoring**: Prometheus, Grafana, ELK Stack

---
