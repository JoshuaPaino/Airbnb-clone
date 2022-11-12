import { Controller } from "@hotwired/stimulus";
import axios from 'axios';

export default class extends Controller {
    static targets = ['email', 'submit'];

    connect() {
        console.log("axios", axios);

        this.submitTarget.addEventListener('click', (e) => {
            e.preventDefault();

            if (this.emailTarget.value.length === 0) {
                // empty
                console.log("empty")
            } else {
                axios.get('/api/users_by_emails', {
                    params: {
                        email: this.emailTarget.value
                    }, headers: {
                        "ACCEPT": "application/json"
                    }
                }).then((response) => {
                    Turbo.visit('/users/sign_in');
                }).catch((response) => {
                    Turbo.visit('/users/sign_up');
                })

            }
        });

    }
}
