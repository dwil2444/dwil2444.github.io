
export const CVData = {
    personalData: {
      name: 'Dane Williamson',
      title: 'CS PhD Student at University of Virginia',
      image: 'https://i.ibb.co/P9SLqts/IMG-1152.jpg',
      contacts: [
        { type: 'email', value: 'dw3zn@virginia.edu' },
        { type: 'phone', value: '804-490-8574' },
        { type: 'location', value: 'Charlottesville, VA' },
        { type: 'website', value: 'danewilliamson.me' },
        { type: 'linkedin', value: 'www.linkedin.com/in/dane-a-williamson' },
        { type: 'github', value: 'github.com/dwil2444' }
      ]
    },
    sections: [
      {
        type: 'text',
        title: 'Career Profile',
        content: 'My interests include Full Stack Web Development, Video Game Development, Machine Learning, ' +
        'Software Engineering and Augmented Reality. My PSN Online ID is redwulf1886, so I welcome all challengers' +
        '(especially in FIFA)',
        icon: 'usertie'
      },
      {
        type: 'common-list',
        title: 'Education',
        icon: 'graduation',
        items: [
          {
            title: 'Computer Science (BS)',
            authority: 'Virginia State  University',
            authorityWebSite: 'http://www.cet.vsu.edu/departments/engineering/programs/computer-science/index.php',
            rightSide: '2016 - 2020'
          },
          {
            title: 'Computer Science (PHD)',
            authority: 'University Of Virginia',
            authorityWebSite: 'https://engineering.virginia.edu/departments/computer-science',
            rightSide: '2020 - Present'
          }
        ]
      },
      {
        type: 'experiences-list',
        title: 'Experiences',
        icon: 'archive',
        items: [
          {
            title: 'Software Development Intern',
            company: 'Apple',
            description: 'Cupertino, CA',
            datesBetween: '2019.05 - 2019.08',
            descriptionTags: ['Python', 'Mongo-DB']
          },
          {
            title: 'Software Development Intern',
            company: 'VSU-Skype Partnership',
            description: 'Petersburg, VA',
            datesBetween: '2018.08 - 2019.05',
            descriptionTags: ['JavaScript', 'React']
          },
          {
            title: 'Software Engineering Intern',
            company: 'IBM',
            description: 'Raleigh, NC',
            datesBetween: '2018.05 - 2018.08',
            descriptionTags: ['Node-JS', 'Docker',  'Jenkins']
          },
          {
            title: 'Software Development Intern',
            company: 'VSU-Skype Partnership',
            description: 'Petersburg, VA',
            datesBetween: '2017.08 - 2018.05',
            descriptionTags: ['C#', "Git"]
          }
        ]
      },
      {
        type: 'common-list',
        title: 'Languages',
        icon: 'language',
        items: [
          {
            authority: 'English',
            authorityMeta: 'Native'
          },
          {
            authority: 'Spanish',
            authorityMeta: 'Beginner'
          }
        ]
      },
      {
        type: 'tag-list',
        title: 'Skills Proficiency',
        icon: 'rocket',
        items: ['React', 'Javascript', 'Python', 'C++', 'Java', 'C', 'Git', 'Bluetooth Low Energy (BLE)', 'RESTful API\'s'],
      },
    ]
  }