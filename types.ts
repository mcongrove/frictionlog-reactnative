export interface Commit {
	sha: string;
	commit: CommitDetail;
	author: CommitAuthor;
}

export interface CommitDetail {
	message: string;
	committer: CommitCommitter;
}

export interface CommitCommitter {
	date: string;
}

export interface CommitAuthor {
	login: string;
	avatar_url: string;
}
