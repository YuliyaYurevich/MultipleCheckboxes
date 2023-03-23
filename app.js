const episodes = [
  {
    id: 1,
    name: "James Q Quick's Origin Story",
  },
  {
    id: 2,
    name: "Amy Dutton's Origin Story",
  },
  {
    id: 3,
    name: 'The Tech Behind Compressed.fm',
  },
  {
    id: 4,
    name: 'Starting a New Development Project',
  },
  {
    id: 5,
    name: 'How Do you Start a New Design Project?',
  },
  {
    id: 6,
    name: 'Freelancing (Part 1)',
  },
  {
    id: 7,
    name: 'Freelancing (Part 2)',
  },
  {
    id: 8,
    name: 'The Tech Behind jamesqquick.com',
  },
  {
    id: 9,
    name: 'Teh Tech Behind SelfTeach.me',
  },
  {
    id: 10,
    name: 'Design Fundamentals (Part 1)',
  },
  {
    id: 11,
    name: 'Design Fundamentals (Part 2)',
  },
  {
    id: 12,
    name: 'Productivity: Tools, Tips, and Workflows',
  },
  {
    id: 13,
    name: 'The Future of Code with No Code',
  },
  {
    id: 14,
    name: 'Building the Perfect Desk Setup',
  },
  {
    id: 15,
    name: 'Everything You Need to Know to Get Started in SvelteKit',
  },
  {
    id: 16,
    name: 'Live Streaming for Beginners',
  },
  {
    id: 17,
    name: 'All Things Automated',
  },
  {
    id: 18,
    name: 'Amy Gives James a Design Consult',
  },
  {
    id: 19,
    name: 'Figma for Everyone',
  },
  {
    id: 20,
    name: 'Learning and Building in Public',
  },
  {
    id: 21,
    name: 'Getting Your First Dev Job',
  },
  {
    id: 22,
    name: 'Hiring a Designer or Getting Your First UI / UX Job',
  },
  {
    id: 23,
    name: 'IRL Freelance Proposal',
  },
  {
    id: 24,
    name: 'Getting Started on YouTube',
  },
  {
    id: 25,
    name: 'Starting your own Podcast',
  },
  {
    id: 26,
    name: 'How Blogging Can Change Your Career',
  },
  {
    id: 27,
    name: 'Talking to Some of Our Favorite Content Creators',
  },
  {
    id: 28,
    name: 'Our Favorite Things: A Crossover Episode with Web Dev Weekly',
  },
  {
    id: 29,
    name: 'Freelancing IRL: Unveiling a Site Redesign',
  },
  {
    id: 30,
    name: 'Wordpress in 2021',
  },
  {
    id: 31,
    name: 'Struggle Bus',
  },
  {
    id: 32,
    name: 'Getting Started with TypeScript',
  },
  {
    id: 33,
    name: 'Small Design Tweaks that Make All the Difference',
  },
  {
    id: 34,
    name: 'Getting git',
  },
  {
    id: 35,
    name: 'Crossover Episode with Purrfect Dev',
  },
  {
    id: 36,
    name: 'SVGs FTW',
  },
  {
    id: 37,
    name: 'Building a Course',
  },
];

const checkboxes = document.querySelectorAll('input[type=checkbox]');

let shiftKey;
let checked = [];

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', (e) => {
    if (e.shiftKey) {
      shiftKey = +e.target.id.replace(/\D/g, '');

      checkboxes.forEach((box) => {
        box.checked && +box.id.replace(/\D/g, '') !== shiftKey
          ? checked.push(+box.id.replace(/\D/g, ''))
          : box;
      });

      if (checked.length > 0) {
        checked.sort();

        const closestIndex = (num, arr) => {
          let curr = arr[0],
            diff = Math.abs(num - curr);

          for (let val = 0; val < arr.length; val++) {
            let newdiff = Math.abs(num - arr[val]);
            if (newdiff < diff) {
              diff = newdiff;
              curr = arr[val];
            }
          }
          return curr;
        };

        let needToBeChecked = +closestIndex(shiftKey, checked);

        let numberOfCheckboxes = Math.abs(needToBeChecked - shiftKey);

        let arrayNeeded;

        needToBeChecked > shiftKey
          ? (arrayNeeded = [...Array(numberOfCheckboxes).keys()].map(
              (i) => i + shiftKey
            ))
          : (arrayNeeded = [...Array(numberOfCheckboxes).keys()].map(
              (i) => i + needToBeChecked
            ));

        for (let i = 0; i < arrayNeeded.length; i++) {
          checkboxes.forEach((box) => {
            +box.id.replace(/\D/g, '') === +arrayNeeded[i]
              ? (box.checked = true)
              : box;
          });
        }
      }
    }
  });
});
