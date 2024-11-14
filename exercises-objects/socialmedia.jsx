const userProfile = {
    username: "john_doe",
    bio: "Web developer",
    social: { twitter: "https://twitter.com/john_doe" }
};

function updateSocialLinks(user, newLinks) {
    for (const [key, value] of Object.entries(newLinks)) {
        user.social[key] = value;
    }
}
updateSocialLinks(userProfile, { github: "https://github.com/john_doe" });
// { username: 'john_doe', bio: 'Web developer', social: { twitter: 'https://twitter.com/john_doe', github: 'https://github.com/john_doe' } }
console.log(userProfile);
