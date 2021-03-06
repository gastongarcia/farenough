const posts = [
  {
    id: 1,
    title: "Solitude is found 25 minutes from where you are",
    publishDate: "2022-03-09",
    author: "Gastón García",
    image: "/images/20220109_120106.jpeg",
    excerpt:
      "Cornhole vape street art cliche hexagon echo park mlkshk kickstarter offal. Freegan semiotics XOXO, 8-bit narwhal schlitz selvage bushwick.",
    content:
      "Austin venmo authentic plaid enamel pin lumbersexual 8-bit chambray microdosing pork belly listicle. Lo-fi selvage offal crucifix iceland brooklyn palo santo, cardigan mustache trust fund hammock humblebrag. Poke twee lomo squid cray vice celiac pabst palo santo irony deep v stumptown chambray etsy. Everyday carry direct trade chia, taxidermy pork belly leggings yr banh mi stumptown craft beer food truck pitchfork salvia viral.",
    slug: "solitude-is-close",
  },
  {
    id: 2,
    title: "There is a light and it never goes out",
    publishDate: "2022-03-10",
    author: "Gastón García",
    image: "/images/a20220228_092046.jpeg",
    excerpt:
      "Guacamole corn vape street art cliche hexagon echo park mlkshk kickstarter offal. Freegan semiotics XOXO, 8-bit narwhal schlitz selvage bushwick.",
    content:
      "Justin authentic plaid enamel pin lumbersexual 8-bit chambray microdosing pork belly listicle. Lo-fi selvage offal crucifix iceland brooklyn palo santo, cardigan mustache trust fund hammock humblebrag. Poke twee lomo squid cray vice celiac pabst palo santo irony deep v stumptown chambray etsy. Everyday carry direct trade chia, taxidermy pork belly leggings yr banh mi stumptown craft beer food truck pitchfork salvia viral.",
    slug: "guacamole-curry",
  },
];

export function getAllPosts() {
  return posts;
}

export function getAllSlugs() {
  let slugs = [];
  getAllPosts().map((p) => slugs.push(`/blog/${p.slug}`));
  return slugs;
}

export function getPostData(slug) {
  let post = null;
  getAllPosts().map((p) => {
    if (p.slug === slug) {
      post = p;
      return;
    }
  });
  return post;
}
