---
title: Pau Monterosa
---
<div class="menu-container">
  <button class="menu-button">OBSERVE</button>
  <div class="menu-content">
    <a href="/cv">MY CV</a>
    <a href="/notes">MY NOTES</a>
    <a href="/projects">MY PROJECTS</a>
  </div>
</div>
<p id="current-date" style="font-family: 'Orbitron'; color: #00d2ff; text-shadow: 0 0 5px #00d2ff;"></p>

<script>
  const date = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('current-date').innerHTML = date.toLocaleDateString('en-US', options);
</script>