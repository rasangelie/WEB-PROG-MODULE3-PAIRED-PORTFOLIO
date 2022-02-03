
//get
const james_button_open = document.getElementById('james_button_open');
const modal_container = document.getElementById('modal_container');
const close_j= document.getElementById('close_j');

const chris_button_open = document.getElementById('chris_button_open');
const modal_container_2 = document.getElementById('modal_container_2');
const close_c= document.getElementById('close_c');

const carnegie_button_open = document.getElementById('carnegie_button_open');
const modal_container_3 = document.getElementById('modal_container_3');
const close_d= document.getElementById('close_d');

const paula_button_open = document.getElementById('paula_button_open');
const modal_container_4 = document.getElementById('modal_container_4');
const close_p= document.getElementById('close_p');

const tinker_button_open = document.getElementById('tinker_button_open');
const modal_container_5 = document.getElementById('modal_container_5');
const close_t= document.getElementById('close_t');


//replace
let quote = document.getElementById('quote');
let quote_c = document.getElementById('quote_c');
let quote_d = document.getElementById('quote_d')
let quote_p = document.getElementById('quote_p')
let quote_t = document.getElementById('quote_t')


//variable for generating quotes
let james_get_quote = document.getElementById('james_get_quote');
let chris_get_quote = document.getElementById('chris_get_quote');
let dale_get_quote = document.getElementById('dale_get_quote');
let paula_get_quote = document.getElementById('paula_get_quote');
let tinker_get_quote = document.getElementById('tinker_get_quote');

//quotes
const james_quotes = [
    '“You do not rise to the level of your goals. You fall to the level of your systems.”',
    '“You should be far more concerned with your current trajectory than with your current results.”',
    '“Goals are good for setting a direction, but systems are best for making progress.”',
    '“Habits are the compound interest of self-improvement”',
    '“Every action you take is a vote for the type of person you wish to become.”',
    '“Be the designer of your world and not merely the consumer of it.”',
    '“Success is the product of daily habits—not once-in-a-lifetime transformations.”',
    '“When you can’t win by being better, you can win by being different.”',
];

const chris_quotes = [
    '“Stop waiting. Better to act on a poor idea than to never act on a great idea. Shut up and start!”',
    '“Going deeper to gain expertise doesn’t mean giving up on things you’re interested in; it means having more of what you love the most.”',
    '“The challenge, then, is to turn your hobbies, interests, and talents into a long-term, sustainable career.”',
    '“In negotiation, there is no penalty for saying a number that is too big.”',
    '“Tap into this well of strength, and you’ll soar in ways that you’ve only dreamt possible.”'
    

];

const dale_quotes = [
    '“Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.”',
    '“People rarely succeed unless they have fun in what they are doing.”',
    '“Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.”',
    '“Our fatigue is often caused not by work, but by worry, frustration and resentment.”',
    '“First ask yourself: What is the worst that can happen? Then prepare to accept it. Then proceed to improve on the worst.”',
    '“We all have possibilities we don’t know about. We can do things we don’t even dream we can do.”',
    '“Fear doesn’t exist anywhere except in the mind.”'
    

];

const paula_quotes = [
    '“Find out what the next thing is that you can push, that you can invent, that you can be ignorant about, that you can be arrogant about, that you can fail with, and that you can be a fool with. Because in the end, that’s how you grow.”',
    '“The best way to accomplish serious design ... is to be totally and completely unqualified for the job.”',
    '“Words have meaning, type has spirit.”',
    '“It’s through mistakes that you actually can grow. You have to get bad in order to get good.”',
    '“Beige is the color of indecision.”',
    '“The work needs to get out of your head and on to the table, and it needs to be done from the heart.”',
    '“Identities are the beginning of everything. They are how something is recognized and understood. What could be better than that?”'
    

];

const tinker_quotes = [
    '“When you’re a designer trying to think of new ideas, you need a space that’s off-the-wall and different.”',
    '“Think that the art of marketing, the art of promotion and the art of storytelling is definitely elevated and we have to get better every year.”',
    '“If people dont love or hate your work, you just haven’t done all that much.”',
    '“A basic design is always functional but a great one will say something”',
    '“Sports teaches you very important lessons that are many and varied. It’s probably the closest thing to the lessons we learned in fighting and warfare, about loyalty and growing up.”'
    
    

];


//action
james_button_open.addEventListener('click', () => {
    modal_container.classList.add('show');
    james_get_quote.addEventListener('click', function() {
        let random = james_quotes[Math.floor(Math.random() * james_quotes.length)];
        quote.innerHTML = random;
    });
    


});

close_j.addEventListener('click', () => {
    modal_container.classList.remove('show');
});


chris_button_open.addEventListener('click', () => {
    modal_container_2.classList.add('show');
    chris_get_quote.addEventListener('click', function() {
        let random2 = chris_quotes[Math.floor(Math.random() * chris_quotes.length)];
        quote_c.innerHTML = random2;
    });
    


});

close_c.addEventListener('click', () => {
    modal_container_2.classList.remove('show');
});


carnegie_button_open.addEventListener('click', () => {
    modal_container_3.classList.add('show');
    dale_get_quote.addEventListener('click', function() {
        let random3 = dale_quotes[Math.floor(Math.random() * dale_quotes.length)];
        quote_d.innerHTML = random3;
    });
    


});

close_d.addEventListener('click', () => {
    modal_container_3.classList.remove('show');
});


paula_button_open.addEventListener('click', () => {
    modal_container_4.classList.add('show');
    paula_get_quote.addEventListener('click', function() {
        let random4 = paula_quotes[Math.floor(Math.random() * paula_quotes.length)];
        quote_p.innerHTML = random4;
    });
    


});

close_p.addEventListener('click', () => {
    modal_container_4.classList.remove('show');
});


tinker_button_open.addEventListener('click', () => {
    modal_container_5.classList.add('show');
    tinker_get_quote.addEventListener('click', function() {
        let random5 = tinker_quotes[Math.floor(Math.random() * tinker_quotes.length)];
        quote_t.innerHTML = random5;
    });
    


});

close_t.addEventListener('click', () => {
    modal_container_5.classList.remove('show');
});
