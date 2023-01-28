//Loop Assignments (Don’t use arrays)


// Task 1. Make a program that prints all positive numbers that are odd and smaller than 100 starting from 1. (1 3 5 7 9 11…)

function positive_odd(){
    let answer = '';
    for (let i=1; i<100; i+=2){
        answer += i + ' '
    }
    return answer
}

positive_odd();


// Task 2. Make a program that prints all positive numbers that are smaller than 100 and even, in this order: 2 98 4 96 6 94 … Print result in one line.

function positive_even(){
    let answer = '';
    let forward = 2;
    let backward = 98;
    while (forward != backward){
        answer += forward + ' ' + backward + ' ';
        forward += 2;
        backward -= 2;
    }
    console.log(answer);
}

positive_even();


// Task 3. Make a program that asks repeatedly from the user the distance (km) and time (h) and calculates average speed. 
// The program ends when user gives 0 for the distance. (After getting 0, the program does not ask anything from the user.)

function averageSpeed(){
    let distance = Number(prompt('Enter the distance in kilometers'));
    let next_distance = 1;
    let time = 0;
    let average_speed = 0;
    while (distance != 0 && next_distance != 0){
        time += Number(prompt('Enter the time in hours'));
        next_distance = Number(prompt('Enter the distance in kilometers'));
        distance += next_distance;
    }
    average_speed = distance / time;
    console.log(average_speed);
}

averageSpeed();


// Task 4. Make a program that asks 5 numbers from user. After that the program prints out how many of those numbers where even.

function calculating(){
    let answer = 0;
    for (let i=0; i<=5; i++){
        let input = Number(prompt('Enter any number'));
        if (input % 2 == 0){
            answer++;
        }
    }
    console.log('There was', answer, 'even numbers');
}

calculating();

// Task 5. Make a program that asks numbers from the user, until user gives 0 and then program ends. In the end program prints out average of the numbers.

function find_average(){
    let answer = 0;
    let sum = 0;
    let counter = 0;
    while (true){
        let number = Number(prompt('Enter any number to proceed or 0 to stop'))
        if (number == 0) break;
        sum += number;
        counter++;
    }
    answer = sum / counter;
    console.log('The average of your numbers is ', answer);
}

find_average();


// Task 6. Make a program that asks 25 numbers form the user. In the end program prints out average of the numbers.

function find_average2(){
    let answer = 0;
    let sum = 0;
    let counter = 0;
    for (let i=0; i<5; i++){
        let number = Number(prompt('Enter any number to proceed or 0 to stop'))
        sum += number;
        counter++;
    }
    answer = sum / counter;
    console.log('The average of your numbers is ', answer);
}

find_average2();

// Task 7. Make a program that ask first one number from the user. After that the program asks: ”Do you want to continue giving numbers?(y/n)”. 
// If user answers y, the program continues to ask another number. If user answers n, program ends. In the end program prints out average of the numbers.

function find_average3(){
    let average = 0;
    let sum = 0;
    let counter = 0;
    while (true){
        let number = Number(prompt('Enter any number'))
        sum += number;
        counter++;
        let users_answer = prompt('Do you want to continue giving numbers?(y/n)');
        if (users_answer == 'n') break;
    }
    average = sum / counter;
    console.log('The average of your numbers is ', average);
}

find_average3();

// Task 8. Make a program that asks first how many numbers user wants to give to the program. After that program asks those numbers. In the end program prints out the smallest number that user gave.

function min_of_numbers(){
    let numbers_amount = Number(prompt('Enter the amount of numbers you want to enter'));
    if (numbers_amount > 0) {
        let min = Number(prompt('Enter a number'));
        for (let i = 0; i < numbers_amount-1; i++){
            let input = Number(prompt('Enter a number'));
            if (input < min) min = input;
        }
        console.log('The minimum number you entered is ', min)
    }
        
}

min_of_numbers();

// Task 9. Make a program that asks ten numbers and in the end prints out two biggest numbers.

function two_biggest(){
    for (let i=0; i<5; i++){
        let input = Number(prompt('Enter a number'));
        if (i===0) {max_num1 = input} // max_num1 = first entered number
        else if (i===1) {max_num2 = input} // max_num2 = second entered number
        else if (input > max_num1 || input > max_num2) {
            if (max_num1 < max_num2) max_num1 = input;
            else if (max_num1 > max_num2) max_num2 = input;
            else max_num1 = input;
        }

    }
    console.log(`The two biggest numbers are ${max_num1} and ${max_num2}`)
}

two_biggest();


// Task 10. Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number.
