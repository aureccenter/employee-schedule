const Schedule = () => {
  return (
    <div>
      <iframe
        src='https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FDetroit&amp;src=bWw1cWM5c21wcWIzYzhjZDNrbjh0YWpqM29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=NHY1anJyM2oxdmZtaGNxaXMybHBkcWM5bWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=MW0wcm9hMWM5Z2EyOHNoazdxdDZiZTc0Z29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZnF0MmRyY2kzZ20ydjQ4ZGQ0dGdqOGdsNWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23039BE5&amp;color=%239E69AF&amp;color=%233F51B5&amp;color=%23B39DDB&amp;title=Employee%20Schedule&amp;showTabs=0&amp;mode=WEEK'
        style={{ border: 'solid 1px #777' }}
        width='800'
        height='600'
        frameborder='0'
        scrolling='yes'
      ></iframe>
    </div>
  );
};

export default Schedule;
