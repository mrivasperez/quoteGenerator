const quotes = [
    {
        name: 'Maya Angelou',
        quote: 'If you’re not angry, you’re either a stone, or you’re too sick to be angry. You should be angry. You must not be bitter. Bitterness is like cancer. It eats upon the host. It doesn’t do anything to the object of its displeasure. So use that anger, yes. You write it. You paint it. You dance it. You march it. You vote it. You do everything about it. You talk it. Never stop talking it.'
    }
    ,
    {
        name: 'John Lewis',
        quote: 'By the force of our demands, our determination and our numbers, we shall splinter the segregated South into a thousand pieces and put them back together in the image of God and democracy.'
    }
    ,    
    {
        name: 'Ralph Ellison',
        quote: 'I am an invisible man. No, I am not a spook like those who haunted Edgar Allan Poe; nor am I one of your Hollywood-movie ectoplasms. I am a man of substance, of flesh and bone, fiber and liquids -- and I might even be said to possess a mind. I am invisible, understand, simply because people refuse to see me. Like the bodiless heads you see sometimes in circus sideshows, it is as though I have been surrounded by mirrors of hard, distorting glass.When they approach me they see only my surroundings, themselves, or figments of their imagination -- indeed, everything and anything except me.'
    }
    ,
    {
        name: 'Howard Thurman',
        quote: 'Of all weapons, love is the most deadly and devastating, and few there be who dare trust their fate in its hands.'
    }
    ,
    {
        name: 'Michelle Alexander',
        quote: 'At the peak of the Civil Rights Movement, activists and others began to turn their attention to economic problems...The shift in focus served to align the goals of the Civil Rights Movement with key political goals of poor and working-class whites, who were also demanding economic reforms'
    }
    ,
    {
        name: 'Patrick Mendis,',
        quote: 'The evolution of national unity and equal rights is all about what America represents as a nation today: a manifestation of the historical episodes of Jefferson and Henry as well as the Civil War, the Women’s Suffrage movement, and the Civil Rights struggles.'
    }
    ,
    {
        name: 'Malcolm X',
        quote: 'Mankinds history has proved from one era to another that the true criterion of leadership is spiritual. Men are attracted by spirit. By power, men are forced. Love is engendered by spirit. By power, anxieties are created.'
    }
    ,
    {
        name: 'Emma Lazarus',
        quote: 'Give me your tired, your poor, Your huddled masses yearning to breathe free, The wretched refuse of your teeming shore. Send these, the homeless, tempest-tossed, to me: I lift my lamp beside the golden door.'
    }
    ,
    {
        name: 'Jose Antonio Vargas',
        quote: 'Citizenship to me is more than a piece of paper. Citizenship is also about character. I am an American. We’re just waiting for our country to recognize it.'
    },
    {
        name: 'Anyone who has ever made anything of importance was disciplined.,
        quote: 'Andrew Hendrixson'
    },
    {
        name: 'Creativity is intelligence having fun.',
        quote: ''
    },
    {
        name: 'What you get by achieving your goals is not as important as what you become by achieving your goals.',
        quote: 'Henry David Thoreau'
    }
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote(){
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote
}

displayQuote();

