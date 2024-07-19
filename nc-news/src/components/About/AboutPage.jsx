import './AboutPage.css'
export default function AboutPage() {
  return (
    <div className="about-box">
      <div className="inner-about-box">
        <h1>About</h1>
        <section className="about">
          <p>
            <strong>NC News</strong> is a project developed as part of my
            13-week coding bootcamp at Northcoders. This application is my first
            full-stack project, combining backend and frontend development to
            create a simplified news platform.
          </p>
          <h3>Background</h3>
          <p>
            NC News is the culmination of my learning journey at Northcoders,
            where I explored various aspects of software development. Leveraging
            the skills and knowledge acquired during the bootcamp, I built an
            API in our backend module and used it to power this application. NC
            News is designed to offer a streamlined and engaging user
            experience, showcasing my newfound proficiency in full-stack
            development.
          </p>
          <h3>Features</h3>
          <p>Using my Api, NC News allows you to:</p>
          <ul>
            <li>
              <strong>View a List of Articles</strong>: Explore a wide range of
              articles on various topics.
            </li>
            <li>
              <strong>Filter Articles by Topics</strong>: Narrow down your
              search by selecting specific topics that interest you.
            </li>
            <li>
              <strong>View Comments on Articles</strong>: Read insightful
              comments left by other users about specific articles.
            </li>
            <li>
              <strong>Post Comments</strong>: Share your thoughts and engage in
              discussions by posting comments on articles.
            </li>
            <li>
              <strong>Delete Comments</strong>: Manage your contributions by
              deleting any of your comments.
            </li>
            <li>
              <strong>Like/Vote on Articles</strong>: Show appreciation for
              well-written articles by liking or voting on them.
            </li>
            <li>
              <strong>Sort Articles</strong>: Organize articles based on
              creation date, author, and number of likes.
            </li>
          </ul>
          <h3>Future Plans</h3>
          <p>
            As I continue to expand my skills and knowledge, I have exciting
            plans to enhance NC News further. These include adding user
            authentication, improving the user interface, adding pagination, and introducing more
            interactive features to make the platform even more engaging.
          </p>
          <p className="thanks">
            Thank you for visiting NC News. I hope you enjoy exploring the site
            and find the content both informative and enjoyable. If you have any
            feedback or suggestions, feel free to reach out!
          </p>
        </section>
      </div>
    </div>
  );
};

