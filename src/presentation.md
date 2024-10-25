
# Experience Engineering
## Stop Developing Software, Start Developing Experiences

> By [Carlos Limardo](mailto:carloslimardo@icims.com) for [iCIMS](https://icims.com), [HackRU 2024](https://hackru.com)

Notes: What my talk is about

---

## Carlos Limardo

+ Principal ~~Software~~ **Experience** Engineer @ iCIMS
+ 10 Years Developing Experiences at iCIMS
+ 20 Years Developing Software
+ 40 Years Developing

---{ "layout": "center" }

# iCIMS
***Talent Powers Transformation***

![Bertie](/img/Bertie_hi.gif)

> Visit https://careers.icims.com for opps

---{ "layout": "quote" }

# What is Experience Engineering?

Honestly, 🤷🏽‍♂️ I *thought* I made it up.

s
Notes: Explain how I thought I came up with the term while researching and writing
this presentation about **Product** Development &amp; the ***Product* Experience**.

Spawned from some work I had to do implementing a new Analytics vendor when they
kept tauting it as a **PX** tool, dejavu.

---

# What is Product Experience (PX)?

> Product experience (PX) describes the feelings, emotions, and perceptions that users have when they’re engaging with different product features.
>
> &mdash; [UserPilot: *What is Product Experience? Definition, Elements, and More*]()

---

# What is User Experience (UX)?

> User Experience refers to the feeling users experience when using a product, application, system, or service. It is a broad term that can cover anything from how well the user can navigate the product, how easy it is to use, how relevant the content displayed is etc.
>
> &mdash; [ProductPlan: *User Experience*](https://www.productplan.com/glossary/user-experience/)

---


"The only source of knowledge is experience"


---

But...

> ### "Experience is a good school. But the fees are high."
> - Heinrich Heine

Notes: So we want more experiences, but at a discount. One way to reduce the price of experience is to bake it in.

---

# The Experience Mindset

- Every interaction is an experience or oppertunity to learn.
- Don't just say you're data-driven, become data-driven!
- Don't be afraid to drop features, processes, etc that are not adding value or distracting from your focus.
- Don't be afraid to deliver products that are not fully completed or polished.

Notes: It's better to deliver a lot of small incremental improvements, fixes and features over time.
Don't plan too far ahead, instead guide your roadmap based on feedback and test results from the small deliveries. If you don't do this, you're not truly data-driven.

---

# DX

It starts with the Developer Experience that allows for lots of experimenting while costing or negativly impacting as little people as possible.

Notes: The best way to make experiences cheap is a to invest upfront in a great developer experience.
By building your writing and stratically seperating concerns and features from the core and business logic can go a long way.

---

# DX: CI/CD

* Use Git for storing, sharing, reviewing and discussing code.
* Commits should trigger automatic build, tests & linting scripts so they may be caught early and gated or rejected from deployment until passing.
  - Aim to keep your code coverage above 90% if possible
* Add a staging enviorment that mimics production as closely as possible with additional automated tests and sanity checks.

Notes: The more confident developers are that their code won't break production the more willing they will be to experiment and test their code before it's 100% ready. 
Source control also allows for rolling back or pinning down who/what/when something was introduced to the code for troubleshooting purposes.

---

# DX: CI/CD tools

### Git
- [Github](https://github.com)
- [Bitbucket](https://bitbucket.com)
- [Gitea](https://gitea.com) [foss]
- [GitLab](https://gitlab.com) [foss]

### CI/CD
- [Jenkins]()
- [CircleCI]()
- [Travis CI]()
- [Woodpecker]() [foss]

* At iCIMS we use BitBucket &amp; Jenkins. Gitea with Woodpecker (similar API as Github Actions) is a great free &amp; self-hosted alternative though.

---

# DX: Feature Flags

* Feature Flags allow options or configurations to be set per session. Can be based or segmented by groups, company, customers or any set of targeted users.
    - Testing features on smaller subset of users or releasing in features in phases keeps the *expense* down.
* Where possible, isolate seperate concerns, interfaces and features into seperately versioned packages.
    - Allows for continous delivery but phased rollout as the feature flag can be a reference to the version number of the package the user would see/use.

Notes: By isolating and delivering features behind feature flags devs can release incomplete or work-in-progress that will only be seen or effect a smaller subset of users.
Groups or tiers of 'beta' testers could be targeted to first see and give feedback on the newest features in the earlier portions of the tests until bugs are ironed out
or immediately disabled/turned off if an issue is found or rolled out to more users as the feature matures or passes certain thresholds.

---

# DX: Feature Flag providers

* **Start with dotenv if you have to as a placeholder and for local/dev**
* [LaunchDarkly]()
* [PostHog]()

---

# DX: Analytics &amp; Telemetry

* It's early in your journey so when in doubt of what to track or test, track everything! [@todo: add note about obviously being mindful of privacy and using anonymization]
* Diff between web analytics and product analytics.
* Use [Analytics]() libary to allow for adding or switching out analytics providers or tracking subset with additional tracking. (ie. add Pendo tracking for logged in admin users on Tenant based app/service but not the tenant's customers, etc.)
* Add logging and OpenTelemetry for maintenance, performance testing and troubleshooting early.

---

# DX: Analytics &amp; Telemetry Tools

### Analytics
* [Gainsight]()
* [Pendo]()
* [Google Analytics]()
* [PostHog]() [FOSS]


---

> ### "Life is about creating and living experiences that are worth sharing."
> - Steve Jobs

---
# ;tlrd

[PostHog](https://posthog.com) - Great FOSS which provides many of the tools you would use.

What's an experience? Experience describes the feelings, emotions, and perceptions that people have when they’re engaging with or working for your company.

What's experience? Wisdom, what you've learned by testing, doing and observing.

Experience Engineering is a mind frame of continously updating your and refining your process or product to deliver features, monitoring and gathering feedback and consistently making (or dropping) small functionality that is tested and monitored along the way.

It consists of elements such as:

UI/UX:
    - Product usability and accessibility – how easy it is for users to achieve their goals?
    - User interface – how intuitive and user-friendly the product is to navigate?
    - Design for extendability &amp; personalization.
    
DX:
    - Information architecture – how easy it is for users to find the information or assets they need?
    - The platform it’s built on – how reliable or scalable &amp; fast it is?
    - How flexible or customizable is it?

PX:
    - Features and functionality – how well it addresses user pain points, needs, and desires.
    - Content strategy – how relevant, engaging, and informative the content is.
