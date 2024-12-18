//CREATED BY MRSHABAN ✅😜
//NUMBER  +923059395959
const {cmd} = require('../command');
const axios = require('axios');
const fetch = require('node-fetch');

cmd({
    pattern: "gitclone",
    alias: ["clone", "github"],
    react: "🌐",
    desc: "Clone a GitHub repository.",
    category: "downloader",
    filename: __filename
}, async (conn, mek, m, {from, args, q, reply}) => {
    try {
        if (!q) return reply("Where is the GitHub link?\n\n📌 Example: .gitclone https://github.com/PRINCE-GDS/PRINXE-MD");

        const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
        if (!regex.test(q)) return reply("⚠️ Link incorrect.");

        let [_, user, repo] = q.match(regex) || [];
        repo = repo.replace(/.git$/, '');
        let url = `https://api.github.com/repos/${user}/${repo}/zipball`;
        
        // Fetch file information
        let response = await fetch(url, {method: 'HEAD'});
        let filename = response.headers.get('content-disposition').match(/attachment; filename=(.*)/)[1];

        reply("✳️ *Wait, sending repository...*");
        conn.sendFile(from, url, filename, null, mek);
    } catch (error) {
        console.error(error);
        reply("An error occurred while fetching the repository.");
    }
});
