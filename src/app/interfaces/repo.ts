import { Owner } from "./owner";

export interface Repo {
    name:string,
    html_url:string,
    description:string,
    stargazers_count:number,
    open_issues_count:number,
    pushed_at:string,
    owner:Owner,
}
