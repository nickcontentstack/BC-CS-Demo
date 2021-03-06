/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Link from "next/link";

class Section extends React.Component {
  render() {
    const { section } = this.props;
    function contentSection(key) {
      return (
        <div className="home-content" key={key}>
          {section.title_h2 && <h2>{section.title_h2}</h2>}
          {section.description && <p>{section.description}</p>}
          {section.call_to_action.title
          && section.call_to_action.href ? (
            <Link
              href={section.call_to_action.href}
            >
              <a className="btn secondary-btn">{section.call_to_action.title}</a>
            </Link>
            ) : (
              ""
            )}
        </div>
      );
    }

    function imageContent(key) {
      return (
        <img src={section.image.url} alt={section.image.filename} key={key} />
      );
    }
    return (
      <div className="home-advisor-section">
        {section.image_alignment === "Left"
          ? [imageContent("key-image"), contentSection("key-contentstection")]
          : [contentSection("key-contentstection"), imageContent("key-image")]}
      </div>
    );
  }
}
export default Section;
