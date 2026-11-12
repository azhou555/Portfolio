---
title: Intern Reflections at M&T
date: 2026-08-02
---
# Reflections on Internship

## Breakdown
As I'm writing this, there's just one week left in my internship at M&T Bank. I wanted to jot down the things I've learned, the things I wish I learned, and anything else I find meaningful about my summer here. 

### My Work
I was one of two interns on the CBA(Core Banking APIs) team here at M&T Bank. We managed a variety of services(off the top of my head around 26 microservices+1 I made that has not been deployed yet) which included FDX(Financial Data Exchange) and some other app codes. While I did have some larger project tasks, most of the weekly work was contributing to sprint tasks and completing tickets. That really accustomed me to what its like working on a team with actual deadlines and expectations that had to be met. 

## Interning in General
Although it varies team to team, I'm happy to say that CBA has been exceptionally welcoming and accomodating for my duration on the team. While this is by no means a knock at any of the other places I've been at previously, they helped me get familiar with the codebase(s) and answered any question I had. They were forthcoming with assistance and information, and involved me whenever possible. When I asked to get involved with projects or stories, they were always willing to let me pitch in. That leads to the first reflection I have: having initiative is unbelievably important. 

### Initiative
If I had just sat at my desk and only did the things I was asked to, I don't think I would have gotten nearly as much done as I had. My first actual code change beyond changing poms and properties came after insistent bugging of my mentor, after which he gave me a known bug ticket to work on. After that, I gained a lot more confidence and trust from the team to work on tickets, and let me do a lot more than I otherwise could have. Of the two biggest projects that I did over the summer, the first came from the team lead that had planned work in preparation for an upcoming cloud migration, whereas the other came from explicitly asking for a larger project, after which I was given permission to create a new service to overhaul the existing API key system. 

### Due Diligence
Working on code is scary. Even though there are reviews and testing environments and whatnot before things reach production, it is still scary. Many people have probably heard the phrase "Move fast, break things" or however it goes, but I'm more of a "Move fast, try not to break things" kind of person. What it comes down to is just doing your due diligence. Triage your tickets properly, think things through, and don't be afraid to get a second opinion. It's easier to revise your implementation in the planning phase than after your merge request has been denied and you have to start from scratch. 

### Bigger Picture
Always think about the bigger picture. To work on a service, you have to understand:
1. What it does
2. What it relies on
3. Who relies on it
When implementing a new feature or even a new service, you need to fully understand all the parts involved. How to make your changes to satisfy a request from a consumer without breaking other consumers, how to roll out a feature that won't impact consumers who don't opt in, that kind of stuff.
