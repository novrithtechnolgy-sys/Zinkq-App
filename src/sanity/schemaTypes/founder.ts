export default {
  name: "founder",
  title: "Founder",
  type: "document",
  fields: [
    {
      name: "order",
      title: "Order",
      type: "number",
      description: "1 = first, 2 = second, 3 = third",
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "expect",
      title: "Description / Expectation",
      type: "text",
    },
    {
      name: "image",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "facebook",
      title: "Facebook URL",
      type: "url",
    },
    {
      name: "instagram",
      title: "Instagram URL",
      type: "url",
    },
    {
      name: "linkedin",
      title: "LinkedIn URL",
      type: "url",
    },
    {
      name: "summary",
      type: "text",
      title: "Startup Summary",
    },

    {
      name: "services",
      type: "array",
      title: "Services",
      of: [{ type: "string" }],
    },

    {
     name: "businesses",
     type: "array",
     title: "Businesses",
     of: [
       {
        type: "object",
        fields: [
            { name: "year", type: "string", title: "Year" },
            { name: "title", type: "string", title: "Title" },
            { name: "desc", type: "string", title: "Description" },
            {
                name: "image",
                type: "image",
                title: "Image",
                options: { hotspot: true }
            }
        ]
        }
        ]
    }

  ],
};
