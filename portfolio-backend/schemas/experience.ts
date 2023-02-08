import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'jobTitle',
      title: 'JobTitle',
      type: 'string',
    }),
    defineField({
      name: 'companyImage',
      title: 'CompanyImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'dateStarted',
      title: 'DateStarted',
      type: 'date',
    }),
    defineField({
      name: 'dateEnded',
      title: 'DateEnded',
      type: 'date',
    }),
    defineField({
      name: 'isCurrent',
      title: 'IsCurrent',
      type: 'boolean',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
    }),
    defineField({
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
  ],

  // preview: {
  //   select: {
  //     title: 'experience',
  //     experience: 'experience.jobTitle',
  //     media: 'companyImage',
  //   },
  //   prepare(selection) {
  //     const {experience} = selection
  //     return {...selection, subtitle: experience && `by ${experience}`}
  //   },
  // },
})

// preview: {
//   select: {
//     title: '',
//     author: 'author.name',
//     media: 'mainImage',
//   },
//   prepare(selection) {
//     const {author} = selection
//     return {...selection, subtitle: author && `by ${author}`}
//   },
// },
