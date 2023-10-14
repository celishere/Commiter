export interface Payload {
    repository: Repository;
    ref: string;
    commits: Commit[];
    compare: string;
}

export interface Repository {
    name: string;
}

export interface Commit {
    author: CommitAuthor;
    message: string;
    url: string;
    added: CommitStats;
    removed: CommitStats;
}

export interface CommitAuthor {
    username: string;
}

export interface CommitStats {
    length: number;
}