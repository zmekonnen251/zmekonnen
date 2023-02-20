interface SanityBody {
	_createdAt: string;
	_id: string;
	_rev: string;
	_updatedAt: string;
}

interface Image {
	_type: 'image';
	asset: {
		_ref: string;
		_type: 'reference';
	};
}

interface Slug {
	_type: 'slug';
	current: string;
}

export interface Social extends SanityBody {
	_type: 'social';
	title: string;
	url: string;
}

export interface PageInfo extends SanityBody {
	_type: 'pageInfo';
	address: string;
	backgroundInformation: string;
	email: string;
	name: string;
	phoneNumber: string;
	profilePic: Image;
	heroImage: Image;
	role: string;
	logo: Image;
}

export interface Technology extends SanityBody {
	_type: 'skill';
	image: Image;
	progress: number;
	title: string;
}

export interface Skill extends SanityBody {
	_type: 'skill';
	title: string;
	progress: number;
	image: Image;
	visible: boolean;
}

export interface Project extends SanityBody {
	_type: 'project';
	title: string;
	image: Image;
	summary: string;
	technologies: Technology[];
	sourceCodeLink: string;
	liveDemoLink: string;
	slug: Slug;
}

export interface Experience extends SanityBody {
	_type: 'experience';
	company: string;
	companyImage: Image;
	dateStarted: Date;
	isCurrent: boolean;
	jobTitle: string;
	points: string[];
	dateEnded: Date;
	technologies: Technology[];
	location: string;
}

interface Contact extends SanityBody {
	_type: 'contact';
	name: string;
	email: string;
	phoneNumber: string;
	postalCode: string;
	city: string;
	country: string;
	address: string;
}

interface Education extends SanityBody {
	_type: 'education';
	schoolName: string;
	programName: string;
	dateStarted: Date;
	dateEnded: Date;
	points: string[];
	location: string;
}

export interface ResumeData extends SanityBody {
	_type: 'resume';
	name: string;
	contact: Contact;
	educations: Education[];
	experiences: Experience[];
	socials: Social[];
	frontEndSkills: string[];
	backEndSkills: string[];
	otherSkills: string[];
	summary: string;
}
