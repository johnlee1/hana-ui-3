import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ServiceConfig } from './config/service-config';

@Injectable()
export class PostService {

    constructor(private http: Http) {}

    getPost(post_id) {
        return this.http.get(ServiceConfig.URL + 'posts/' + post_id, { headers: ServiceConfig.createHeader() })
                        .map(ServiceConfig.extractData)
                        .catch(ServiceConfig.handleError);
    }

    getPosts() {
        return this.http.get(ServiceConfig.URL + 'posts/me', { headers: ServiceConfig.createHeader() })
                        .map(ServiceConfig.extractData)
                        .catch(ServiceConfig.handleError);
    }

    getUserPosts(user_id) {
        return this.http.get(ServiceConfig.URL + 'posts/users/' + user_id, { headers: ServiceConfig.createHeader() })
                        .map(ServiceConfig.extractData)
                        .catch(ServiceConfig.handleError);
    }

    createPost(input) {
        const body = JSON.stringify(input);
        return this.http.post(ServiceConfig.URL + 'posts', body, { headers: ServiceConfig.createHeader() })
                        .map(ServiceConfig.extractData)
                        .catch(ServiceConfig.handleError);
    }

    updatePost(input, post_id) {
        const body = JSON.stringify(input);
        return this.http.put(ServiceConfig.URL + 'posts/' + post_id, body, { headers: ServiceConfig.createHeader() })
                        .map(ServiceConfig.extractData)
                        .catch(ServiceConfig.handleError);
    }

    deletePost(post_id) {
        return this.http.delete(ServiceConfig.URL + 'posts/' + post_id, { headers: ServiceConfig.createHeader() })
                        .map(ServiceConfig.extractData)
                        .catch(ServiceConfig.handleError);
    }

}
