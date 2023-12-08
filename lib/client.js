import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: '373a7svw',
    dataset: 'production',
    apiVersion: '2023-12-05',
    useCdn: true,
    token: 'skOXkOgVeWxXKhAp0zdieuzFaYfW8wZ48yJ64SPWyOP6ivpWkyTwEc5vYEzY8AaEr6QFxbIe5MS2gPTopGKR2W1z5KtEzt9cfeN9vJRhO6ZnPsqUWolkxJL0Q4SIeon1TggLu3uoGpscU15eEc9AHqSQOcXNZetUC8J4HBdEukLxT5L9Rkj0'
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)