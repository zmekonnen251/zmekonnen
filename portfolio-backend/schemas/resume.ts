import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
    }),
    defineField({
      name: 'experiences',
      title: 'Experiences',
      type: 'array',
      of: [{type: 'reference', to: {type: 'experience'}}],
    }),
    defineField({
      name: 'educations',
      title: 'Educations',
      type: 'array',
      of: [{type: 'reference', to: {type: 'education'}}],
    }),
    defineField({
      name: 'frontEndSkills',
      title: 'FrontEndSkills',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'backEndSkills',
      title: 'BackEndSkills',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'otherSkills',
      title: 'OtherSkills',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'languages',
      title: 'Languages',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [{type: 'reference', to: {type: 'project'}}],
    }),
    defineField({
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{type: 'reference', to: {type: 'contact'}}],
    }),
    defineField({
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [{type: 'reference', to: {type: 'social'}}],
    }),
  ],
})
