type idType = string | number

export const API_ENDPOINTS = {
    PUBLIC: {
        BLOG: `/public/blog`,
       BLOGID: (id: idType) => `/public/blog/${id}`
    }
}



