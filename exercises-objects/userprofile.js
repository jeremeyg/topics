// //User Profile Setup
// // Create a function that takes in user data (name, age, email)
// as arguments and returns a user profile object.
//  Include a method within the object to update the user's email.

//https://chatgpt.com/c/33576c22-0640-4fdf-9d0e-ac4425c5f53e
function createUserProfile(name, age, email) {
    return {
        name: name,
        age: age,
        email: email,
        updateEmail(newEmail) {
            this.email = newEmail;
            console.log(`Email is updated to ${this.email}`);
        },
        getProfile() {
            return { name: this.name, age: this.age, email: this.email };
        }
    };
}

const person1 = createUserProfile("jeremy", 34, "jeremeyg@.com");
console.log(person1);
console.log(person1.getProfile());
person1.updateEmail("jrimeeg@mail.com");
console.log(person1);
