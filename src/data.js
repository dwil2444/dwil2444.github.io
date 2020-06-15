
export const CVData = {
    personalData: {
      name: 'Dane Williamson',
      title: 'CS PhD Student at University of Virginia',
      image: 'https://bulma.io/images/placeholders/128x128.png',
      contacts: [
        { type: 'email', value: 'dw3zn@virginia.edu' },
        { type: 'phone', value: '804-490-8574' },
        { type: 'location', value: 'Charlottesville, VA' },
        { type: 'website', value: 'dwil2444.github.io' },
        { type: 'linkedin', value: 'www.linkedin.com/in/dane-a-williamson' },
        { type: 'github', value: 'github.com/dwil2444' }
      ]
    },
    sections: [
      {
        type: 'text',
        title: 'Career Profile',
        content: 'When I was child, I always want to be a developer.' +
        'I think I am now. Culpa proident ad officia minim Lorem sint ' +
        'excepteur irure culpa nisi aliquip nostrud.Laborum voluptate' +
        'nostrud fugiat occaecat proident veniam excepteur pariatur amet ex sit.' +
        'Anim aliquip do in commodo adipisicing.Nulla adipisicing nisi enim ullamco'  +
        'sunt veniam.Ullamco labore sunt Lorem veniam id et Lorem magna eiusmod aute.' +
        'Aliquip minim est consectetur anim mollit aliqua ex elit do et nulla do. Cupidatat' +
        'ad sunt cillum sint consectetur sunt cillum eiusmod ad esse aliqua. Aute anim elit' +
        'amet in duis aute ipsum deserunt qui deserunt officia excepteur veniam. Et laboris' +
        'nostrud est ipsum nulla fugiat deserunt magna velit irure. Ullamco duis ut magna ea'  +
        'tempor enim in ipsum.',
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
            title: 'Software Engineering Intern',
            company: 'Apple',
            description: 'I made a desktop application to  simulate the host-stack of third-party BLE devices',
            companyWebSite: 'http://somecompanyexample.com',
            companyMeta: '',
            datesBetween: '2017.10 - Present',
            descriptionTags: ['Python', 'Mongo-DB']
          },
          {
            title: 'Software Engineering Intern',
            company: 'VSU-Skype Partnership',
            description: 'I made a Skype-Add in using React JS',
            companyWebSite: 'http://somecompanyexample.com',
            companyMeta: '',
            datesBetween: '2017.10 - Present',
            descriptionTags: ['JavaScript', 'React']
          },
          {
            title: 'Software Development Intern',
            company: 'IBM',
            description: 'I worked as a developer on Watson Content Hub',
            companyWebSite: 'http://somecompanyexample.com',
            companyMeta: '',
            datesBetween: '2016.8 - 2017.10',
            descriptionTags: ['Node-JS', 'Docker',  'Jenkins']
          },
          {
            title: 'Software Development Intern',
            company: 'VSU-Skype Partnership',
            description: 'I made chat-bots using C#',
            companyWebSite: 'http://somecompanyexample.com',
            companyMeta: '',
            datesBetween: '2016.8 - 2017.10',
            descriptionTags: ['C#', "Git"]
          }
        ]
      },
      {
        type: 'projects-list',
        title: 'Projects',
        description: 'Optional',
        icon: 'tasks',
        groups: [
          {
            sectionHeader: 'Company Name',
            description: 'Optional',
            items: [
              { title: 'Project', projectUrl: 'optional', description: 'Optional' },
              { title: 'Project', projectUrl: 'optional', description: 'Optional' },
              { title: 'Project', projectUrl: 'optional', description: 'Optional' }
            ]
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
        items: ['React', 'Javascript', 'Python', 'C++', 'C', 'Git'],
      },
      {
        type: 'tag-list',
        title: 'Hobbies & Interests',
        icon: 'cubes',
        items: ['Photography', 'Poetry']
      }
    ]
  }