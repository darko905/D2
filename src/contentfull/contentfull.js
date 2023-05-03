import { createClient } from "contentful";

export const client = createClient({
    space: "2tn24w35hl5h",
    accessToken: "S9XNjudi8sGHDNQQOYPOQ4ESqTAcb3blXFsfeFRGkI8",
});

export const getProjects = async () => {
    try {
        const entries = await client.getEntries({ content_type: "d2Dev" });
        const filterableEntries = entries.items.map((data) => {
            const filterableEntry = data.fields;
            return filterableEntry;
        });
        return filterableEntries;
    } catch (error) {
        console.log(error);
    }
};

//treba doraditi ovu metodu i napraviti single post templejt/stranicu
//za sada link ka sinle post stranici ne radi

// export const getSingeProject = async (slug) => {
//     try {
//         const entries = await client.getEntries({
//             "fields.slug": slug,
//             content_type: "d2Dev",
//         });
//         return entries;
//     } catch (error) {
//         console.log(error);
//     }
// };
