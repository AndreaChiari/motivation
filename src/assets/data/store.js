import { reactive } from 'vue';

export const store = reactive({

    proofList: [
        {
            value: '1926',
            title: 'FINISHED LESSONS'
        },
        {
            value: '100%',
            title: 'SATISFACTION RATE'
        },
        {
            value: '3092+',
            title: 'ENROLLED LEARNERS'
        },
        {
            value: '200',
            title: 'ONLINE INSTRUCTORS'
        },

    ],
    courses: [
        {
            image: '/src/assets/img/motivation-course-06-480x298.jpg',
            cost: '$30.00',
            title: 'How to be Successful: Create A Growth Mindset For Success',
            sheetPic: '/src/assets/img/sheet-plastic-solid.svg',
            lessons: '3 Lessons',
            userPic: '/src/assets/img/user-regular.svg',
            students: '50 students'
        },
        {
            image: '/src/assets/img/motivation-course-05-480x298.jpg',
            cost: '$30.00',
            title: 'How to build Confidence in Your Abilities',
            sheetPic: '/src/assets/img/sheet-plastic-solid.svg',
            lessons: '1 Lesson',
            userPic: '/src/assets/img/user-regular.svg',
            students: '50 students'
        },
        {
            image: '/src/assets/img/motivation-course-04-480x298.jpg',
            cost: '$20.00',
            title: 'Productivity Machine - Focus in a Distracted World',
            sheetPic: '/src/assets/img/sheet-plastic-solid.svg',
            lessons: '5 Lessons',
            userPic: '/src/assets/img/user-regular.svg',
            students: '50 students'
        },
        {
            image: '/src/assets/img/motivation-course-03-480x298.jpg',
            cost: '$20.00',
            title: 'Effective Time Management Mastery - Complete Guide',
            sheetPic: '/src/assets/img/sheet-plastic-solid.svg',
            lessons: '18 Lessons',
            userPic: '/src/assets/img/user-regular.svg',
            students: '50 students'
        },
        {
            image: '/src/assets/img/motivation-course-02-480x298.jpg',
            cost: '$25.00',
            title: 'Body Language Secrets for Entrepreneurs',
            sheetPic: '/src/assets/img/sheet-plastic-solid.svg',
            lessons: '19 Lessons',
            userPic: '/src/assets/img/user-regular.svg',
            students: '50 students'
        },
        {
            image: '/src/assets/img/motivation-course-01-480x298.jpg',
            cost: '$19.99',
            title: 'Management Skills: The Science of Leadership',
            sheetPic: '/src/assets/img/sheet-plastic-solid.svg',
            lessons: '17 Lessons',
            userPic: '/src/assets/img/user-regular.svg',
            students: '50 students'
        },


    ],
    logos: [
        '/src/assets/img/client-logo-05-primary.png',
        '/src/assets/img/client-logo-06-primary.png',
        '/src/assets/img/client-logo-07-primary.png',
        '/src/assets/img/client-logo-04-primary.png',
        '/src/assets/img/client-logo-03-primary.png',
        '/src/assets/img/client-logo-02-primary.png',

    ]






})



