    //  jodi (.)  .com ace kina check kori => 
        // const email='mama@mami.com' ;
    // if(email.includes('.')){
    //     console.log('has dot')
    // }

    //   '' .pdf kina ba last name check korar jnno. . .. .. ..
    // const fileName='My Final examination note.pdf';
    // console.log(fileName.endsWith('.pdf'))


        //  ... .. slice .. .. ..
        // const name="My name is Alex"
        // console.log(name.slice(3,8))


    //   ... ..concat. ..
    // const firstName='silver'
    // const lastName='Gold'

    // console.log(firstName.concat(' ', lastName,  'chowdhury'))


    // ... prottek ta string ke alada korar jnno
    // const names='Tesla spacex paypal solarcity twitter';
    // const name=names.split();
    // console.log(name);




    // .. ..   Reverse.. .. ,, ,,splite
    // const commitment='I will work hard and will never give up'
    // const parts=commitment.split(' ');
    // console.log(parts);

    // const commitment='my exam is over'; 
    // const parts= commitment.split('')
    // console.log(parts);

    // const commitment='my exam is over'
    // const parts=commitment.split(' ');
    // const reverseParts=parts.reverse();
    // console.log(parts);
    // console.log(reverseParts)

    // const commitment='my exam is over';
    // const parts=commitment.split(' ');
    // const reversParts=parts.reverse();
    // const reverseJoin=reversParts.join(' ');
    // console.log(reverseJoin)


        // Object.   
    //     const sunglass={
    //         color:"white",
    //         price:120,
    //         brand:'Ray Ban'
    //     }
    // console.log(sunglass)



        // nested
        // const college={
        //     name: 'vnc',
        //     address: 'baily road',
        //     students:800,
        //     events: ['21 feb','independence day', 'victory day'],
        // //     people:{
        // //         principal:{
        // //             name:'sabura mam',
        // //             yearOfExperience:25,
        // //             degree:'English',
        // //         }
        // //     }
        // // }
        // // console.log(college.people)

        // const college={
        //     name: 'vnc',
        //     address: 'baily road',
        //     students:800,
        //     events: ['21 feb','independence day', 'victory day'],
        //     people:{
        //         count:200,
        //         principal:{
        //             name:'sabura mam',
        //             yearOfExperience:25,
        //             degree:'English',
        //         }
        //     }
        // }
        // console.log(college.people)

        // dot notation use
        // const college={
        //     name: 'vnc',
        //     address: 'baily road',
        //     students:800,
        //     events: ['21 feb','independence day', 'victory day'],
        //     people:{
        //         count:200,
        //         principal:{
        //             name:'sabura mam',
        //             yearOfExperience:25,
        //             degree:'English',
        //         }
        //     }
        // // }
        // // console.log(college.people.principal)

        //     //  bracket notation use
        //     const college={
        //     name: 'vnc',
        //     address: 'baily road',
        //     students:800,
        //     events: ['21 feb','independence day', 'victory day'],
        //     people:{
        //         count:200,
        //         principal:{
        //             name:'sabura mam',
        //             yearOfExperience:25,
        //             degree:'English',
        //         }
        //     }
        // }
        // console.log(college['people']['principal'])

            // for 
    //   const numbers=[11,22,33,44,55];
    //   for(const number of numbers)  {
    //     console.log(number)
    //   }    

    const student={
        name:'Akbar',
        id: 111,
        age:14,
        favSubject: ['physics','math', 'bangla']
    }
    for(const key in student){
        console.log(key)
    }