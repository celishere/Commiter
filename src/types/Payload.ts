export interface Payload {
    repository: Repository;
    ref: string;
    commits: Commit[];
    compare: string;
}

export interface Repository {
    name: string;
    commits_url: string;
}

export interface Commit {
    id: string;
    author: CommitAuthor;
    message: string;
    url: string;
}

export interface CommitAuthor {
    username: string;
}

export interface CommitData {
    stats: CommitStats;
}

export interface CommitStats {
    total: number;
    additions: number;
    deletions: number;
}