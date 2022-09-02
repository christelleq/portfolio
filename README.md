# Portfolio

## Planning
Figma: https://www.figma.com/file/sz4e4HZja1kuRqoLS2SjKY/Portfolio-Site?node-id=0%3A1
  - wireframes
  - user stories
  - release plan
  
Release Plan:
- [X] Landing page with summary of me and social links.
- [X] Projects page with tech stack and learnings for each project.
- [X] Make website responsive, especially on mobile.
- [ ] Education page.
- [ ] About Me page.
- [ ] Tech stack filter (Projects page).
- [ ] 3D version. Include loader.

## Reflections
### 30/08/22
#### Obstacles / Difficulties: 
1. My computer died. RIP. Luckily I have someone wonderful in my life who is lending me their computer to work on this portfolio.
2. Tailwind CSS x Flexbox.
3. React useState hook x window.location.pathname. Still to be overcome. I have three sections to my website: education, projects, and about me, which you can access through a navigation bar. I want to embolden the relevant section link on the nav bar if the user is visiting that section.

#### Learnings:
1. Tailwind CSS x Flexbox. I'd neglected styling during my Dev Academy Aotearoa (DAA) journey, focusing on aspects that involved more complexity and problem-solving, so it's only fair that I'd struggled with styling with Tailwind CSS and Flexbox. I'm proud of myself for not banging my head against the wall, having the wisdom to step back, and research and create a mental model of how Flexbox works. I'd already used Tailwind at DAA (I'd already done the mahi and cried the tears), and along with copying the configuration from a DAA group project, this part was easy.
2. Wireframes are useful! During a styling dilemma while I was coding, I went back to my wireframes, which made decision-making easy.
3. My user stories and release plan provide clarity. Especially with what I should be doing at each moment.
4. I've still got it!

### 31/08/22
#### Obstacles / Difficulties:
1. Changing width and keeping everything centered. I tried many different centering codes with different width codes. I ended up only setting the width of paragraph elements, which avoided the issue of everything sticking to the left if I set the whole app to a certain width. The paragraph elements were the only elements where their width affected the aesthetic of my portfolio.

#### Learnings:
1. Responsive styling with Tailwind and Flexbox. Surprisingly straightforward, especially once I learned about how breakpoints work. This documentation helped: https://tailwindcss.com/docs/responsive-design, especially the section "Targeting mobile screens". Proud of myself for minimising Tailwind CSS code by seeing if components would acquire the desired effect if their parent contained the CSS code instead. Yay for DRY code! Yay for responsive styling! :D
2. My conversation with Dev Academy Aotearoa's careers team, Tom and Caryne, helped me realise what were most important to me in a job. I'm fired up by the thought of learning and growing in software development and leadership. I want to be someone who can solve more and more complex problems, provide elegant solutions, and create beautiful code. I want to work in a place where I have exposure to leadership and teamwork that I want to emulate, that is effective, inspiring, and harmonious; exemplary leadership. I want to work in an environment that is high energy and creative. I want mentorship and learning resources. I need challenge. Note to self to fully reflect this in my portfolio and to come up with questions for potential employers regarding my standards.
3. Sleep, exercise, and continuously executing fruitful actions energise me ⚡

### 01/09/22
#### Obstacles / Difficulties:
1. Project descriptions. I created a Projects component, then a Project component to format each project displayed on the Projects component. It turns out my project descriptions are too long to pass as a prop to the Project component and keep my code tidy. First I tried creating a txt file, then an HTML file, both was like trying to fit a puzzle piece from a different puzzle. Next, I tried creating another component. This seemed most promising... but my first tries of passing it as a prop failed. From googling, I was reminded of children! This failed too. I had worked with children before, so I knew this had to work. There must be a tiny mistake. So I tried renaming my project description component and file name from '**p**ortfolioDescription' to '**P**ortfolioDescription'. Suddenly, all my content, along with the project description appeared! (Thanks Vite.)

#### Learnings:
1. React components use PascalCase.
2. Reminded that React components can have children!
3. Start. I didn't particularly feel like coding this day, unlike the last couple of days. I had at most a foggy vision for what I wanted to finish by the end of the day. I just started working anyway, and a sort of muscle memory kicked in and I ended up creating the skeletons for my projects section, which I realise are also skeletons for my education section :)

### 02/09/22
#### Learnings:
1. Play, fun, empathy, and maintaining great relationships with loved ones are important for my energy and motivation :) 
