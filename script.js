const speakers = [
  {
    id: 1,
    image: 'https://www.kindpng.com/picc/m/404-4042717_face-profile-png-circle-profile-picture-hd-png.png',
    name: 'Kylie Morenson',
    organization: 'Chef & Restaurant Owner',
    background:
        'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 2,
    image:
        'https://www.mockofun.com/wp-content/uploads/2019/12/circle-photo.jpg',
    name: 'Hannah Stevens',
    organization: 'Baker & Events Designer',
    background:
        'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 3,
    image:
        'https://pngset.com/images/marina-circle-girl-picture-in-circle-face-person-smile-dimples-transparent-png-853416.png',
    name: 'Janet Greg',
    organization: 'Sous Chef',
    background:
        'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 4,
    image: 'https://www.vhv.rs/dpng/d/301-3015119_profile04circular-hd-png-download.png',
    name: 'Anita Jeffers',
    organization: 'Michelin Star Chef',
    background:
        'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 5,
    image: 'https://www.pngfind.com/pngs/m/443-4433119_circle-crop-profile-profile-picture-woman-circle-hd.png',
    name: 'Kim Gomez',
    organization: 'Cookbook Author',
    background:
        'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 6,
    image: 'https://www.vhv.rs/dpng/d/551-5511364_circle-profile-man-hd-png-download.png',
    name: 'George Bennett',
    organization: 'Restauranteur',
    background:
        'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
];

const featuredSpeakers = document.querySelector('.speakers-list');
const speakersButton = document.querySelector('.speakers-btn');

function loadSpeakers() {
  speakers.forEach((speaker, index) => {
  const speakerContainer = document.createElement('article');
  speakerContainer.className = index > 1 ? 'flex-row-center speakers-display' : 'flex-row-center';
  featuredSpeakers.appendChild(speakerContainer);

  const speakerImage = document.createElement('img');
    speakerImage.src = `${speaker.image}`;
    speakerImage.alt = `Image of ${speaker.name}`;
    speakerImage.className = 'speaker-image';
    speakerContainer.appendChild(speakerImage);

  const speakerInfos = document.createElement('div');
    speakerInfos.className = 'speaker-infos';
    speakerContainer.appendChild(speakerInfos);

  const speakerName = document.createElement('h3');
    speakerName.className = 'light-black heading-medium speaker-heading';
    speakerName.textContent = `${speaker.name}`;
    speakerInfos.appendChild(speakerName);

  const speakerOrganization = document.createElement('h4');
    speakerOrganization.className = 'dark-orange';
    speakerOrganization.textContent = `${speaker.organization}`;
    speakerInfos.appendChild(speakerOrganization);

  const speakerBackground = document.createElement('h4');
    speakerBackground.className = 'light-black';
    speakerBackground.textContent = `${speaker.background}`;
    speakerInfos.appendChild(speakerBackground);
  });
}

featuredSpeakers.addEventListener('DOMContentLoaded', loadSpeakers());
speakersButton.addEventListener('onclick', toggleSpeakers); // eslint-disable-line 

function openNav() {
  document.getElementById('pageNav').style.width = '100%';
}

function closeNav() {
  document.getElementById('pageNav').style.width = '0%';
}

openNav();
closeNav();
