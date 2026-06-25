const longformVideos = [
  {
    title: "6 Things That Cured My Procrastination",
    channel: "Better Ideas",
    thumb: "betterideascureprocastination.jpg",
    runtime: "14:22",
    views: "3.8M views",
    ago: "2 years ago",
    avatar: "B", avColor: "av-teal"
  },
  {
    title: "Brainrot is Ruining You | Documentary",
    channel: "Aevy TV",
    thumb: "brainrotisruiningyou.jpg",
    runtime: "22:47",
    views: "5.1M views",
    ago: "8 months ago",
    avatar: "A", avColor: "av-purple"
  },
  {
    title: "Marvel Television's Daredevil: Born Again Season 2 | Teaser Trailer",
    channel: "Marvel Entertainment",
    thumb: "daredevilbornagaintrailer.jpg",
    runtime: "1:42",
    views: "12.4M views",
    ago: "3 months ago",
    avatar: "M", avColor: "av-red"
  },
  {
    title: "Dhurandhar Official Trailer | In Cinemas Worldwide",
    channel: "B62 Studios",
    thumb: "Dhurandharofficialtrailer.jpg",
    runtime: "2:35",
    views: "18.7M views",
    ago: "1 month ago",
    avatar: "B", avColor: "av-orange"
  },
  {
    title: "DOPAMINE DETOX | How To Take Back Control",
    channel: "Niklas Christl",
    thumb: "dopaminedetox.jpg",
    runtime: "18:55",
    views: "6.2M views",
    ago: "1 year ago",
    avatar: "N", avColor: "av-blue"
  },
  {
    title: "Drawing DAREDEVIL being Blindfolded",
    channel: "Siddhesh Sagare",
    thumb: "drawingDDblindfolded.png",
    runtime: "10:14",
    views: "42K views",
    ago: "5 months ago",
    avatar: "S", avColor: "av-indigo"
  },
  {
    title: "Grand Theft Auto V Trailer",
    channel: "Rockstar Games",
    thumb: "gtavofficial trailer.jpg",
    runtime: "1:31",
    views: "87.3M views",
    ago: "11 years ago",
    avatar: "R", avColor: "av-green"
  },
  {
    title: "I Flew Around the World",
    channel: "Ryan Trahan",
    thumb: "iflewaroundinworldryan.jpg",
    runtime: "23:18",
    views: "9.6M views",
    ago: "10 months ago",
    avatar: "R", avColor: "av-blue"
  },
  {
    title: "Invincible - Official Trailer | Prime Video",
    channel: "Prime Video",
    thumb: "invincibletrailer.jpg",
    runtime: "2:14",
    views: "7.8M views",
    ago: "4 years ago",
    avatar: "P", avColor: "av-indigo"
  },
  {
    title: "I Took My Dad to the Super Bowl",
    channel: "Ryan Trahan",
    thumb: "itookmydadtosuperbowlryan.jpg",
    runtime: "19:42",
    views: "11.2M views",
    ago: "11 months ago",
    avatar: "R", avColor: "av-blue"
  },
  {
    title: "22 Life Changing Books Summarized",
    channel: "Mark Manson",
    thumb: "lifechangingbookssummarymarkmanson.jpg",
    runtime: "31:07",
    views: "4.5M views",
    ago: "3 years ago",
    avatar: "M", avColor: "av-grey"
  },
  {
    title: "Making My Biggest Painting Ever",
    channel: "Gawx Art",
    thumb: "makingmybiggestpaintingever.jpg",
    runtime: "28:33",
    views: "2.1M views",
    ago: "1 year ago",
    avatar: "G", avColor: "av-pink"
  },
  {
    title: "The Subtle Art of Not Giving a F*ck – Summarized by the Author",
    channel: "Mark Manson",
    thumb: "markmansontsaongafsummary.jpg",
    runtime: "25:11",
    views: "8.9M views",
    ago: "5 years ago",
    avatar: "M", avColor: "av-grey"
  },
  {
    title: "Self-Help, Solved Podcast",
    channel: "Mark Manson",
    thumb: "self-help,solvedpodcastmarkmanson.jpg",
    runtime: "1:02:44",
    views: "320K views",
    ago: "6 months ago",
    avatar: "M", avColor: "av-grey"
  },
  {
    title: "Spending $1,000,000 In 24 Hours",
    channel: "MrBeast",
    thumb: "spending$1000000in24hrs.jpg",
    runtime: "15:30",
    views: "234M views",
    ago: "5 years ago",
    avatar: "M", avColor: "av-green"
  },
  {
    title: "SPIDER-MAN: BRAND NEW DAY – Official Trailer (HD)",
    channel: "Marvel Entertainment",
    thumb: "Spider-manbnd_officialtrailert.jpg",
    runtime: "2:28",
    views: "16.3M views",
    ago: "2 months ago",
    avatar: "M", avColor: "av-red"
  },
  {
    title: "SPIDER-MAN Brought Me Back",
    channel: "Siddhesh Sagare",
    thumb: "spider-manbroughtmeback.png",
    runtime: "8:47",
    views: "28K views",
    ago: "7 months ago",
    avatar: "S", avColor: "av-indigo"
  },
  {
    title: "Superman Official Trailer",
    channel: "DC",
    thumb: "supermantrailer.jpg",
    runtime: "2:31",
    views: "21.5M views",
    ago: "4 months ago",
    avatar: "D", avColor: "av-blue"
  },
  {
    title: "How I Became An Adult",
    channel: "Wong Fu Productions",
    thumb: "wongfuhowibecomeadult.jpg",
    runtime: "12:08",
    views: "1.4M views",
    ago: "2 years ago",
    avatar: "W", avColor: "av-orange"
  },
  {
    title: "The Boys – Final Season Trailer",
    channel: "Prime Video",
    thumb: "theboysfinalseasontrailer.jpg",
    runtime: "2:07",
    views: "9.1M views",
    ago: "5 months ago",
    avatar: "P", avColor: "av-indigo"
  }
];

const shortsVideos = [
  {
    title: "BABY VILLAGERS VS IRON GOLEM",
    channel: "Minecraft",
    thumb: "babyvillagersvsirongolem.jpg",
    runtime: "0:58",
    views: "14M views",
    avatar: "M", avColor: "av-green"
  },
  {
    title: "Drawing Cillian Murphy as Oppenheimer",
    channel: "Siddhesh Sagare",
    thumb: "drawingoppenheimer.jpg",
    runtime: "0:45",
    views: "61K views",
    avatar: "S", avColor: "av-indigo"
  },
  {
    title: "Guess The Animal!",
    channel: "MrBeast",
    thumb: "guesstheanimal.jpg",
    runtime: "0:59",
    views: "88M views",
    avatar: "M", avColor: "av-green"
  },
  {
    title: "Iron Man fights Doctor Doom",
    channel: "Marvel",
    thumb: "ironmandoctordoom.jpg",
    runtime: "0:52",
    views: "31M views",
    avatar: "M", avColor: "av-red"
  },
  {
    title: "Drawing Miles Morales | Spider-Verse",
    channel: "Siddhesh Sagare",
    thumb: "milesmoralesdrawingsiddhesh.jpg",
    runtime: "0:48",
    views: "95K views",
    avatar: "S", avColor: "av-indigo"
  },
  {
    title: "PAIN OF ACTION",
    channel: "Better Ideas",
    thumb: "painofaction.jpg",
    runtime: "0:55",
    views: "2.2M views",
    avatar: "B", avColor: "av-teal"
  },
  {
    title: "Social Experiment",
    channel: "Ryan Trahan",
    thumb: "socialexperimentryan.jpg",
    runtime: "0:59",
    views: "18M views",
    avatar: "R", avColor: "av-blue"
  },
  {
    title: "Super Slow-Mo",
    channel: "Ryan Trahan",
    thumb: "superslo-moryan.jpg",
    runtime: "0:42",
    views: "9.4M views",
    avatar: "R", avColor: "av-blue"
  },
  {
    title: "What Love Means for a Narcissist",
    channel: "Mark Manson",
    thumb: "whatlovemeantonarcissist.jpg",
    runtime: "0:57",
    views: "4.7M views",
    avatar: "M", avColor: "av-grey"
  },
  {
    title: "I Wrote A Book",
    channel: "Haley Pham",
    thumb: "iwroteabook.jpg",
    runtime: "0:53",
    views: "3.1M views",
    avatar: "H", avColor: "av-pink"
  }
];

function renderLongform(container, videos) {
  container.innerHTML = '';
  videos.forEach(v => {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.innerHTML = `
      <div class="thumb-wrap">
        <img class="thumb-img" src="${v.thumb}" alt="${v.title}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="thumb-placeholder" style="display:none">
          <svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"/></svg>
        </div>
        <span class="runtime">${v.runtime}</span>
      </div>
      <div class="card-info">
        <div class="avatar-letter ${v.avColor}">${v.avatar}</div>
        <div class="card-text">
          <div class="card-title">${v.title}</div>
          <div class="card-channel">${v.channel}</div>
          <div class="card-meta">${v.views} · ${v.ago}</div>
        </div>
        <button class="card-dots" title="More options">⋮</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderShorts(container, videos) {
  container.innerHTML = '';
  videos.forEach(v => {
    const card = document.createElement('div');
    card.className = 'short-card';
    card.innerHTML = `
      <div class="short-thumb">
        <img src="${v.thumb}" alt="${v.title}" onerror="this.style.display='none'">
        <span class="shorts-badge">Shorts</span>
        <span class="runtime">${v.runtime}</span>
      </div>
      <div class="short-info">
        <div class="short-title">${v.title}</div>
        <div class="short-channel">${v.channel} · ${v.views}</div>
      </div>
    `;
    container.appendChild(card);
  });
}

const chips = document.querySelectorAll('.chip');
chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
  });
});

const searchInput = document.getElementById('searchInput');
const searchForm  = document.getElementById('searchForm');

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  const q = searchInput.value.trim().toLowerCase();
  if (!q) {
    renderLongform(document.getElementById('videoGrid'), longformVideos);
    return;
  }
  const filtered = longformVideos.filter(v =>
    v.title.toLowerCase().includes(q) || v.channel.toLowerCase().includes(q)
  );
  renderLongform(document.getElementById('videoGrid'), filtered.length ? filtered : longformVideos);
});

document.getElementById('hamburgerBtn').addEventListener('click', () => {
  const sb = document.querySelector('.sidebar');
  if (sb) {
    sb.style.display = sb.style.display === 'block' ? 'none' : 'block';
  }
});
renderLongform(document.getElementById('videoGrid'), longformVideos);
renderShorts(document.getElementById('shortsGrid'), shortsVideos);
