// ----- Application Data and State -----
const appData = {
  videos: [],
  schedule: { Monday: [], Tuesday: [], Wednesday: [], Thursday: [], Friday: [] },
  events: [],
  users: [
    { id: 'user1', name: 'Rajesh Kumar', email: 'rajesh@example.com', role: 'Student', lastLogin: '2025-09-20', attendingEvents: [] },
    { id: 'user2', name: 'Priya Sharma', email: 'priya@example.com', role: 'Instructor', lastLogin: '2025-09-21', attendingEvents: [] },
  ],
  analytics: {
    totalUsers: 2,
    activeUsersPastWeek: 2,
    eventsRSVP: {},
  },
};

// ----- Role Switching -----
let currentRole = 'Student';

const userProfileSpan = document.querySelector('.profile-name');
const roleSelectorBtn = document.getElementById('roleSelector');

function updateRoleDisplay() {
  userProfileSpan.textContent = currentRole;
}

roleSelectorBtn.addEventListener('click', () => {
  const newRole = prompt('Enter role (Student, Instructor, Admin, Seller):', currentRole);
  if (newRole && ['Student', 'Instructor', 'Admin', 'Seller'].includes(newRole.trim())) {
    currentRole = newRole.trim();
    updateRoleDisplay();
    alert(`Role changed to ${currentRole}`);
  } else {
    alert('Invalid role');
  }
});

updateRoleDisplay();

// ----- Navigation and Section Display -----
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('data-section');
    if (!targetId) return;
    switchSection(targetId);
    setActiveNav(link);
  });
});

function switchSection(sectionId) {
  sections.forEach(s => s.classList.toggle('active', s.id === sectionId));
  if (sectionId === 'videoClasses') renderVideoClasses();
  if (sectionId === 'liveSessions') renderLiveSessions();
  if (sectionId === 'userProfile') renderUserProfile();
  if (sectionId === 'admin') renderAdminPanel();
}

function setActiveNav(activeLink) {
  navLinks.forEach(link => link.classList.remove('active'));
  activeLink.classList.add('active');
}

// Initial view
switchSection('dashboard');

// ----- Card clicks to open sections -----
document.querySelectorAll('.card[data-section]').forEach(card => {
  card.addEventListener('click', () => {
    const target = card.getAttribute('data-section');
    switchSection(target);
    navLinks.forEach(link => {
      if (link.getAttribute('data-section') === target) {
        setActiveNav(link);
      }
    });
  });
});

// ----- Back Buttons -----
document.getElementById('backToDashboard1').addEventListener('click', () => switchSection('dashboard'));
document.getElementById('backToDashboard2').addEventListener('click', () => switchSection('dashboard'));
document.getElementById('backToDashboard3').addEventListener('click', () => switchSection('dashboard'));

// ----- Render Video Classes -----
function renderVideoClasses() {
  const container = document.getElementById('videoClassesList');
  container.innerHTML = '';
  if (appData.videos.length === 0) {
    container.textContent = 'No video classes uploaded yet.';
    return;
  }
  appData.videos.forEach(video => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h4>${video.title}</h4>
      <p><b>Instructor:</b> ${video.instructor}</p>
      <p><b>Day:</b> ${video.day}</p>
      <video width="100%" controls>
        <source src="${video.url}" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    `;
    container.appendChild(card);
  });
}

// ----- Render Live Sessions -----
function renderLiveSessions() {
  const container = document.getElementById('liveSessionsList');
  container.innerHTML = '';
  // For simplicity, show todays scheduled classes (simulate live)
  const today = new Date().toLocaleString('en-US', { weekday: 'long' });
  const todayClasses = appData.schedule[today] || [];
  if (todayClasses.length === 0) {
    container.textContent = 'No live sessions scheduled for today.';
    return;
  }
  todayClasses.forEach(cls => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h4>${cls.title}</h4>
      <p><b>Instructor:</b> ${cls.instructor}</p>
      <p><b>Time:</b> ${cls.time || 'TBA'}</p>
      <video width="100%" controls>
        <source src="${cls.url}" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    `;
    container.appendChild(card);
  });
}

// ----- Render User Profile -----
function renderUserProfile() {
  const container = document.getElementById('userProfileContent');
  container.innerHTML = `
    <p><b>Role:</b> ${currentRole}</p>
    <p>Name: Sample User</p>
    <p>Email: user@example.com</p>
    <p>Member Since: 2024</p>
  `;
}

// ----- Admin Panel Functions -----

// Video Upload
const videoUploadForm = document.getElementById('videoUploadForm');
const uploadedVideosDiv = document.getElementById('uploadedVideos');

videoUploadForm.addEventListener('submit', e => {
  e.preventDefault();
  const title = document.getElementById('classTitle').value.trim();
  const instructor = document.getElementById('classInstructor').value.trim();
  const day = document.getElementById('classDay').value;
  const url = document.getElementById('classVideoURL').value.trim();

  if (!title || !instructor || !day || !url) {
    alert('Please fill all fields.');
    return;
  }

  // add video to data and schedule
  const videoData = { title, instructor, day, url };
  appData.videos.push(videoData);
  if (!appData.schedule[day]) appData.schedule[day] = [];
  appData.schedule[day].push({ ...videoData, time: 'TBA' });

  videoUploadForm.reset();
  renderUploadedVideos();
  renderSchedule();
  alert('Video uploaded and scheduled.');
});

function renderUploadedVideos() {
  uploadedVideosDiv.innerHTML = '<h4>Uploaded Videos</h4>';
  if (appData.videos.length === 0) {
    uploadedVideosDiv.innerHTML += '<p>No videos uploaded.</p>';
    return;
  }
  appData.videos.forEach((vid, idx) => {
    const dv = document.createElement('div');
    dv.style.marginBottom = '1rem';
    dv.innerHTML = `
      <b>${vid.title}</b> by ${vid.instructor} (${vid.day})<br/>
      <a href="${vid.url}" target="_blank">Watch Video</a>
    `;
    uploadedVideosDiv.appendChild(dv);
  });
}

// Schedule Management
const scheduleListDiv = document.getElementById('scheduleList');

function renderSchedule() {
  scheduleListDiv.innerHTML = '<h4>Class Schedule</h4>';
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  days.forEach(day => {
    const dayDiv = document.createElement('div');
    dayDiv.innerHTML = `<strong>${day}</strong>`;
    const classes = appData.schedule[day] || [];
    if (classes.length === 0) {
      dayDiv.innerHTML += '<p>No classes scheduled</p>';
    } else {
      classes.forEach((cls, idx) => {
        const p = document.createElement('p');
        p.textContent = `${cls.title} by ${cls.instructor}`;
        dayDiv.appendChild(p);
      });
    }
    scheduleListDiv.appendChild(dayDiv);
  });
}

// Initial schedule render
renderSchedule();

// Event Management
const eventForm = document.getElementById('eventForm');
const eventsListDiv = document.getElementById('eventsList');

eventForm.addEventListener('submit', e => {
  e.preventDefault();
  const title = document.getElementById('eventTitle').value.trim();
  const date = document.getElementById('eventDate').value;
  const description = document.getElementById('eventDescription').value.trim();

  if (!title || !date) {
    alert('Event title and date are required.');
    return;
  }

  const event = { id: `ev${Date.now()}`, title, date, description, attendees: [] };
  appData.events.push(event);
  eventForm.reset();
  renderEvents();
  renderAnalytics();
  alert('Event created successfully.');
});

function renderEvents() {
  eventsListDiv.innerHTML = '<h4>Upcoming Events</h4>';
  if (appData.events.length === 0) {
    eventsListDiv.innerHTML += '<p>No events scheduled.</p>';
    return;
  }

  appData.events.forEach(ev => {
    const evDiv = document.createElement('div');
    evDiv.style.marginBottom = '1rem';
    evDiv.innerHTML = `
      <b>${ev.title}</b> - ${ev.date} <br/>
      ${ev.description ? ev.description + '<br/>' : ''}
      <button onclick="rsvpEvent('${ev.id}')">RSVP</button>
      <span id="attendCount-${ev.id}">Attendees: ${ev.attendees.length}</span>
    `;
    eventsListDiv.appendChild(evDiv);
  });
}

// RSVP Event function for simplicity
function rsvpEvent(eventId) {
  let userId = 'user1'; // Hardcoded logged-in user id for demo
  let event = appData.events.find(ev => ev.id === eventId);
  let user = appData.users.find(u => u.id === userId);
  if (!event.attendees.includes(userId)) {
    event.attendees.push(userId);
    if (!user.attendingEvents.includes(eventId)) user.attendingEvents.push(eventId);
    alert(`RSVP'd to event: ${event.title}`);
    renderEvents();
    renderAnalytics();
  } else {
    alert(`You have already RSVP'd to this event.`);
  }
}

// User Analytics and Management
const userAnalyticsDiv = document.getElementById('userAnalytics');

function renderAnalytics() {
  userAnalyticsDiv.innerHTML = '<h4>Users & Analytics</h4>';

  // Display user list
  const usersList = document.createElement('div');
  usersList.innerHTML = '<strong>Users:</strong><br/>';
  appData.users.forEach(u => {
    const uDiv = document.createElement('div');
    uDiv.style.marginBottom = '0.5rem';
    uDiv.innerHTML = `
      ${u.name} (${u.email}) - Role: ${u.role}, Last Login: ${u.lastLogin}, Events RSVP'd: ${u.attendingEvents.length}
    `;
    usersList.appendChild(uDiv);
  });

  // Analytics summary
  const analyticsSummary = document.createElement('div');
  analyticsSummary.style.marginTop = '1rem';
  const totalUsers = appData.users.length;
  const activeUsers = appData.analytics.activeUsersPastWeek;
  const totalEvents = appData.events.length;
  analyticsSummary.innerHTML = `
    <strong>Analytics Summary:</strong><br/>
    Total Registered Users: ${totalUsers}<br/>
    Active Users (Past Week): ${activeUsers}<br/>
    Total Scheduled Events: ${totalEvents}
  `;

  userAnalyticsDiv.appendChild(usersList);
  userAnalyticsDiv.appendChild(analyticsSummary);
}

// Initial render analytics
renderAnalytics();

// ----- Search toggle -----
const searchToggle = document.getElementById('searchToggle');
const searchBar = document.getElementById('searchBar');
searchToggle.addEventListener('click', () => {
  searchBar.style.display = searchBar.style.display === 'block' ? 'none' : 'block';
});

// ----- Hamburger menu toggle -----
const hamburgerMenu = document.getElementById('hamburgerMenu');
const mainNav = document.getElementById('mainNav');
hamburgerMenu.addEventListener('click', () => {
  mainNav.classList.toggle('active');
});
