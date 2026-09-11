type idType = string | number

export const API_ENDPOINTS = {
    PUBLIC: {
        BLOG: `/public/blog`,
    //    BLOGID: (id: idType) => `/public/blog/${id}`,
        CONTACT_INFO: `/public/contact_info`,
        CONTACT_US: `/public/contact_us`, 
        PRICING: `/public/pricing`,
        FAQ: `/public/faq`,
        TESTIMONIAL:`/public/testimonial`,

    BLOG_ID: (id: idType) => `/public/blog/${id}`
    }
}



