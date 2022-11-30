export default {
  name: "app",
  title: "App",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "dev",
      title: "Developer",
      type: "string",
    },
    {
      name: "packageName",
      title: "Package Name",
      type: "slug",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
    },
    {
      name: "icon",
      title: "App Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "apk",
      title: "App APK",
      type: "file",
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
  ],
};
