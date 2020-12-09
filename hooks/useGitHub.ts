import { useState, useEffect } from 'react';
import { Commit } from '../types';

interface CommitSection {
	title: string;
	data: Commit[];
}

// NOTE: We would break this out more if we wanted to support more GitHub APIs
const useGitHub = (url: string = 'https://api.github.com/repos/rblalock/pbtechhackathon2020/commits') => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error|string|undefined>();
	const [data, setData] = useState<CommitSection[]>([]);
	const [nextUrl, setNextUrl] = useState<string|undefined>();

	useEffect(() => {
		setLoading(true);

		fetch(url)
			.then((resp) => {
				if (!resp.ok) {
					setError('A network error occured.');
					setLoading(false);
					return;
				}

				// GitHub's API stores pagination URLs in the Link header
				resp.headers?.get('link')?.split(',').forEach((link) => {
					let match:RegExpMatchArray|null = link.match(/<(.*)>; rel="next"/);

					if (match) {
						setNextUrl(match[1]);
					}
				 })

				return resp.json();
			})
			.then((data) => {
				// Massage the data for SectionList component
				const sections:CommitSection[] = [];
				let section:Commit[] = [];
				let s_date:string|undefined = undefined; // Store the date for the current section
				
				data.forEach((commit: Commit, index: number) => {
					const c_date = new Date(commit.commit.committer.date).toLocaleString([], { 
						month: 'long',
						day: 'numeric'
					});
					
					if (!s_date) s_date = c_date;

					// Check if the commit is the same date as the section, if not, make a new section
					// Also, append the new section if we hit the end of the list
					if (c_date !== s_date || index === data.length - 1) {
						sections.push({
							title: s_date,
							data: section
						});

						section = [];

						s_date = c_date;
					}

					section.push(commit);
				});

				setData(sections);
				setLoading(false);
			})
			.catch((err) => {
				setError(err);
				setLoading(false);
			});
	}, [url]);

	return { loading, error, data, nextUrl };
};

export default useGitHub;
