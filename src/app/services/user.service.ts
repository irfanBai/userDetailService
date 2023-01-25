import { EventEmitter } from "@angular/core"

export class UserService {
    users = [
        {name: 'john', job: 'Teacher',  gender: 'Male', country: 'United States', age: 35, avatar: 'assets/testimonial1.png'},
        {name: 'ibrahim', job: 'gym',  gender: 'Male', country: 'morocco', age: 35, avatar: 'assets/testimonial2.png'},
        {name: 'deena', job: 'FBI',  gender: 'Male', country: 'UAE', age: 25, avatar: 'assets/testimonial3.png'}
    ]

    OnShowDetailsClicked = new EventEmitter<{name: string, job: string,  gender: string, country: string, age: number, avatar: string}>();

    ShowUserDetails(user: {name: string, job: string,  gender: string, country: string, age: number, avatar: string}) {
        this.OnShowDetailsClicked.emit(user);
    }
}