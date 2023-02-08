import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({
      name: 'schoolName',
      title: 'SchoolName',
      type: 'string',
    }),
    defineField({
      name: 'programName',
      title: 'ProgramName',
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
