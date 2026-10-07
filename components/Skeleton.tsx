export default function Skeleton() {
  return (
<div className="page-skeleton" id="page-skeleton" aria-hidden="true">
  <div className="sk-inner">
    <div className="sk-nav">
      <div className="sk-bone sk-logo"></div>
      <div className="sk-links"><i className="sk-bone"></i><i className="sk-bone"></i><i className="sk-bone"></i><i className="sk-bone"></i><i className="sk-bone"></i><i className="sk-bone"></i></div>
      <div className="sk-bone sk-cta"></div>
    </div>
  </div>
  <div className="sk-bone sk-hero"></div>
  <div className="sk-inner">
    <div className="sk-body">
      <div className="sk-bone sk-title"></div>
      <div className="sk-bone sk-line"></div>
      <div className="sk-bone sk-line sk-short"></div>
      <div className="sk-cards"><i className="sk-bone"></i><i className="sk-bone"></i><i className="sk-bone"></i></div>
    </div>
  </div>
</div>
  );
}
