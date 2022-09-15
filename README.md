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
- [X] Education page.
- [X] About Me page.
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
#### Obstacles / Difficulties:
1. Creating React elements from an array.
2. Motivation and energy levels. 

#### Learnings:
1. Play, fun, empathy, and maintaining great relationships with loved ones are important for my energy and motivation :) 
2. Returning React elements straight from a forEach() loop doesn't work! I found out map() works in place of forEach(). I could also do this: https://codesource.io/how-to-use-foreach-loop-in-react/, but it seems map() would be more straightforward and have the same effect. Can I render an array of React elements? My guess is yes.

#### My new computer arrived! 😌
Thank you to my catalyst for all your help and support.

### 03/09/22
#### Obstacles / Difficulties:
1. Time. This day I didn't code. This day I worked a 4-hour shift at one of my three casual jobs. Then I went on a city adventure with a loved one. This helped fill up my cup a little more :) I was so tired at the end of all this that I decided that instead of my usual goal to spend my public transport time productively, I would let myself do whatever I wanted to for my 2 hours it would take to get home. I tried playing 1010! but that didn't have its usual hold on me. I didn't even want to listen to music or go down a YouTube rabbit hole. What ended up being most satisfying to me, in my tired state, was setting up my new computer for coding using Dev Academy Aotearoa's software setup instructions, and later, updating the reflections you're reading. I do wonder why I've been extra tired and low motivation in the last couple of days. I've been through more intensity at Bootcamp, and I never felt like this. Do I need community? stimulation? challenge? play? rest? Could the steep increase in exercise and decrease in sleep affect me significantly? Those few days of relationship strain? Has my extroverted self not had enough social interactions? I think I'm particularly energised by great group interactions. (I miss my DAA course mates.) I realise these could all be aggregating to my recent state. -1 -1 -1 

#### Learnings:
1. Reflecting is very helpful. Technically, it helps me remember what I learned. It also helps me recognise my progress, which probably prevents self-doubt and other nasties from coming up. Human-skilly, it helps me gain perspective, clarity, and understanding of the non-technical-knowledge-or-skill factors that get in the way of me enjoying, optimising, or doing my work... and flourishing as a human being. Realisation: I need motivation. Motivation = (Expectancy x Value) / (Impulsivity x Delay). The denominator is low, so it must be the expectancy and value. I guess I'll just have to get feedback from the real world on my portfolio? Or before the SoT Meet and Greet I could show Tom and Caryne? Or Ahmad? Or Rich?  
Nice problem-solving 🙏🏽 (me high-fiving myself). Note, I used empathy (particulary, Nonviolent Communication) and knowledge from Optimize (motivation equation). In recognising my needs, I recognise the natural goal. You could say the ultimate goal is flourishing, and the sub-goals or path to flourishing involves continuously meeting all your needs, the particular needs of the moment being the natural goal. My low motivation is the bug. Optimize is the documentation. I am the problem-solver. 👑

### 04/09/22
#### Obstacles / Difficulties:
1. No portfolio work this day. I focused on doing well on my first ever technical test. The test overview informed me there would be SQL questions, and gradnewzealand.nz contributors informed me there might be SQL joins, neither of which I was confident with, so I focused on preparing for these questions.

#### Learnings:
1. Being prepared is great. I prepared for my first ever technical test by practicing on HackerRank for a couple of weeks, knowing this is where the test would be held, and through LeetCode prior to this knowledge, for general tech test preparation... and because it was fun. I also watched and took notes of these videos on SQL and SQL Joins, respectively: https://www.youtube.com/watch?v=8kDs8QkFI2Y, https://www.youtube.com/watch?v=bLL5NbBEg2I, and practicing some SQL challenges on HackerRank. I got 5 of the 6 questions in the allocated hour, and minutes after the test, I finished solving the 1 I didn't quite get in time and sent it to the team of the company the tech test was for. Proud of myself for working so hard the last week, putting in the right mahi, and giving myself the best shot; for watering the seeds of being someone who prepares and works hard. I'm gaining my own trust! YUS. Stephen M. R. Covey would be proud.
2. Naps are great. Coffee naps are great? I was very sleepy in the morning. After a coffee nap, I felt renewed, the clouds of sleepiness had passed. Joy! Maybe this is a great remedy for tired days, intense days. How do I get myself to nap when I'm not so tired and when I'm a little wired? Great sleeping conditions?! Cool, dark, and quiet.
3. Play is sweeter after a good day's work.
4. Maybe my motivation is low because I'm not getting as much challenge as I'd like (value in the motivation equation). I realise React and Tailwind CSS quickly became easy for me, and this project became repetitive, and didn't require much problem-solving nor lots of new learning after I created the projects section. Some strategies I thought of to remedy this: creating something that really pushes me, e.g. 3D version, working with colours and amping up the styling and design. I realise now expectancy has also been low -- I don't really know how this will really impact my employability, although I've been told it's a great idea. I'm now convinced my energy levels the last week from less sleep has really affected my motivation too. I remember, Optimize's Brian has expanded on the motivation equation: Motivation = **Energy** x ((Expectancy x Value) / (Impulsivity x Delay)). Maybe I just need more breaks! Definitely. More rest. For sure. This day I reconnected to how great it feels to get the rest you need, to feel an absence of sleepiness or tiredness. BREAKS.

### 05/09/22 (Monday, day before Summer of Tech Meet and Greet)
The final stretch. I finished my whole app at an acceptable level. Then I deployed it so that employers could check it out at or after the Summer of Tech Meet and Greet, to support my applications.

#### Obstacles / Difficulties:
1. DEPLOYING. I thought it would take 20 minutes. It took 12x my expectation - 4 hours. I stayed up until 1am. This was like trying to put a third of three similar puzzles together. I still don't have it fully figured out.
2. Vite makes things different, so it was hard to find tutorials for using Vite with cPanel.

#### Learnings:
1. Deploying. I bought my domain name, christellequilang.com with GoDaddy, so I decided to host with them too. I used cPanel, using the repository service. I did it, after 30 commits and reading lots of error messages and playing with the HTML in the DOM. I learned...
- What works in development doesn't necessarily translate in deployment.
- I have a lot of knowledge gaps. I don't understand the difference between development and production, and I don't understand how deployment works, especially with cPanel. 
- Survey your options before buying in! Was GoDaddy the best option?
- I can experiment with the DOM and the changes will appear right in front of me! This means I don't have to make lots of commits if I suspect the issue is in the HTML document.
2. I found motivation again! Was it the challenge of deploying? Was it because I could imagine more clearly the practical application of this portfolio since it was the day before the Meet and Greet? 

### 06/09/22 (Tuesday, day of the Summer of Tech Meet and Greet)
What a day. Thank you so much to Summer of Tech for facilitating these opportunities. Furthermore for increasing the luck for those of us who worked at the event, since we could interact with employers before and after the event. 

#### What went well?
1. Made some good and great connections. 
2. Gained information to help with potentially making decisions.
3. Met some awesome people.
4. This event really energised me. I felt I was in my element. It also filled UP my extroverted cup! Yay!
5. It feels really nice when you're being yourself and people like that!

#### What would I do differently?
1. Start creating my portfolio ASAP. Why? To avoid staying up late. If possible, to have the time to learn how things work.
2. Maintain amazing sleep habits and sleep schedule. Why? To show up at my fullest, best, most energetic, most grounded.
3. Do more research on companies over time, keep track of new jobs on Summer of Tech, and incrementally write notes on each company and role. Why? To feel more prepared and ask questions more specific to the company.

#### Next Steps:
1. Looking back, I really enjoyed this process of creating my portfolio. I want to create more and reflect more. I realise, Optimize, Nonviolent Communication, and my goals are very dear to me. I realise now that it's quite vulnerable for me to talk about these things, albeit genuine. Talking about these did spark a fire for amping up my integrity to my ideals, values, and aspirations. I want to create a personal blog on my health / optimisation journey. Why? To create accountability for me to be consistent on the habits that will gain me the Heroic / Optimize Coach certification. To be an exemplar for anyone who wants to go in the same direction and find inspiration from my actions and results. How can you be an exemplar if no one can see what you do? To reflect more, I really enjoy the process itself; gets the brain juices flowing, I feel more engaged. For fun!
2. ? Create a skills and evidence section. 
3. Revamp my personal statement to say who I want to be and why. Thank you to Summer of Tech's John Clegg for the CV advice.
4. ? Fix my website to fully function with the cPanel deployment.

### 08/09/22

#### Learnings:
1. I learned how to deploy with Firebase, with success! It's so much easier than cPanel. 
2. Google, google, google. Thank you Vite docs and JohnsonScript from YouTube.

#### Next Steps:
1. Edit content to be more... fun? informative? accurate? impactful?
2. Deploy the Solar System!!!

### 11/09/22

#### Obstacles / Difficulties:
1. Getting images to show up on all browsers seemed too hard. In the last two days, I googled about why my images won't show on Safari -- the answers were complex, too complex. This day I realised it didn't work on Firefox either, so I googled whether Firebase works on all browsers, if png is supported by all browsers; I looked at the DOM, tried to get the images to open in a new tab, and then I remembered about how I'd imported my PDFs...

#### Learnings:
1. How to get images to show up on all browsers AND during development. Import images!
2. When troubleshooting something that you want to put in the too hard basket, just **engaging with the problem** can take you a long way. It's the first step!

### 15/09/22

#### Obstacles / Difficulties:
1. Design choices. Font sizes, hover color. I could take a quick design / UI / UX course?

#### Learnings:
1. npm run build before deploying!
2. I remembered about <span> HTML elements! Nifty, more semantically accurate tags. (Right?)
