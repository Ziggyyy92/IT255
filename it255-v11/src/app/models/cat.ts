import { User } from './user';

export class Cat {
    id: string;
    text: string;
    type: string;
    upvotes: number;
    user: User;
    userUpvoted: string;

    constructor(id: string, text: string, type: string, upvotes: number, user: User, userUpvoted: string) {
        this.id = id;
        this.text = text;
        this.type = type;
        this.upvotes = upvotes;
        this.user = user;
        this.userUpvoted = userUpvoted;
    }
}
