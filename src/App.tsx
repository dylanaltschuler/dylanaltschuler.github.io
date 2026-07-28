"use client";

import { Fragment, useMemo, useState } from "react";

type Topic =
  | "Discrepancy"
  | "Metric geometry"
  | "Algorithms"
  | "Statistical physics"
  | "Misc";

type Person = {
  name: string;
  href?: string;
};

type Paper = {
  number: number;
  title: string;
  authors?: Person[];
  authorPrefix?: "With" | "Advised by";
  venue: string;
  links: { label: string; href: string }[];
  tags: Topic[];
  ai: 0 | 1 | 2 | 3 | 4 | 5;
  summary: string;
};

const KONSTANTIN: Person = {
  name: "Konstantin Tikhomirov",
  href: "https://www.andrew.cmu.edu/user/ktikhomi/",
};

const PANDELIS: Person = {
  name: "Pandelis Dodos",
  href: "https://sites.google.com/view/pandelis-dodos/main",
};

const TYROS: Person = {
  name: "Konstantinos Tyros",
  href: "http://users.uoa.gr/~ktyros/",
};

const JONATHAN: Person = {
  name: "Jonathan Niles-Weed",
  href: "https://www.jonathannilesweed.com/",
};

const papers: Paper[] = [
  {
    number: 17,
    title: "Online Beck–Fiala down to logarithmic sparsity",
    authors: [KONSTANTIN],
    venue: "arXiv, 2026",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2607.14238" }],
    tags: ["Algorithms", "Discrepancy"],
    ai: 4,
    summary:
      "We extend the range of sparsities for which the Beck–Fiala conjecture is known, down to almost logarithmic sparsity. More importantly, we do so by means of an online algorithm for minimizing prefix discrepancy; previous work on the conjecture uses offline arguments. As Beck–Fiala scaling cannot hold below logarithmic sparsity in the online setting, our result is essentially optimal. The online Spencer setting is resolved as an immediate consequence.",
  },
  {
    number: 16,
    title: "Metric Poincaré inequalities for graphs",
    authors: [PANDELIS, KONSTANTIN, TYROS],
    venue: "Submitted, 2025",
    links: [{ label: "arXiv", href: "https://arxiv.org/pdf/2509.25489" }],
    tags: ["Metric geometry"],
    ai: 0,
    summary:
      "Extrapolation and nonlinear spectral-gap estimates are core tools in the study of metric embeddings of graphs. We prove optimal extrapolation estimates for spectral gaps of expander graphs into arbitrary metric spaces and optimal estimates on the nonlinear spectral gap of random graphs into metric spaces. Previously, these results were known only for embeddings into vector spaces.",
  },
  {
    number: 15,
    title: "A threshold for online balancing of sparse i.i.d. vectors",
    authors: [KONSTANTIN],
    venue: "Submitted, 2025",
    links: [{ label: "arXiv", href: "https://arxiv.org/pdf/2509.02432" }],
    tags: ["Algorithms", "Discrepancy"],
    ai: 0,
    summary:
      "We give a sharp characterization of the online discrepancy of i.i.d. stochastic arrivals from sparse binary vectors. A surprising phase transition appears in which the optimal online discrepancy does not depend on sparsity. The result also establishes an asymptotic gap, both existential and algorithmic, between the online and offline settings.",
  },
  {
    number: 14,
    title:
      "Metric dimension reduction modulus for superlogarithmic distortion",
    authors: [KONSTANTIN],
    venue: "Submitted, 2025",
    links: [{ label: "arXiv", href: "https://arxiv.org/pdf/2507.02785" }],
    tags: ["Metric geometry"],
    ai: 0,
    summary:
      "We give a sharp characterization of the dimension-reduction modulus for superlogarithmic distortion, closing a long-standing gap and resolving a question from Naor’s 2018 ICM lecture. The proof studies the minimum dimension in which a random graph embeds with superlogarithmic distortion.",
  },
  {
    number: 13,
    title:
      "Discrete Poincaré inequalities and universal approximators for random graphs",
    authors: [PANDELIS, KONSTANTIN, TYROS],
    venue: "Submitted, 2025",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2506.17433" },
      {
        label: "video",
        href: "https://vimeo.com/showcase/metricembeddings?video=1099528291",
      },
    ],
    tags: ["Algorithms", "Metric geometry"],
    ai: 0,
    summary:
      "The standard Euclidean Poincaré inequality gives dimension-free bounds on the expansion of functions from an expander graph into Euclidean space. We prove an analogue for functions from one random graph into another. This resolves a question of Jon Kleinberg and yields a stochastic construction of a universal approximator for random graphs, answering a question of Mendel and Naor.",
  },
  {
    number: 12,
    title: "A universal threshold for geometric embeddings of trees",
    authors: [PANDELIS, KONSTANTIN, TYROS],
    venue: "Combinatorica, 2025",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2504.15212" }],
    tags: ["Metric geometry"],
    ai: 0,
    summary:
      "We show that any bounded-degree tree on n vertices embeds into any normed space of dimension at least 64 log(n)/log(log(n)), while complete trees do not embed into spaces of dimension below .5 log(n)/log(log(n)). The phase transition is universal: it does not depend on the structure of the tree or the host space.",
  },
  {
    number: 11,
    title: "Universal geometric non-embedding of random regular graphs",
    authors: [KONSTANTIN],
    venue: "Submitted, 2025",
    links: [{ label: "arXiv", href: "https://arxiv.org/pdf/2501.09142" }],
    tags: ["Metric geometry"],
    ai: 0,
    summary:
      "It is classical that bounded-degree expander graphs cannot be embedded as geometric graphs into Euclidean space of sublogarithmic dimension. We show that this obstruction is universal over the choice of norm: almost every regular graph admits no such embedding into any normed space of sublogarithmic dimension.",
  },
  {
    number: 10,
    title: "A combinatorial approach to nonlinear spectral gaps",
    authors: [PANDELIS, KONSTANTIN, TYROS],
    venue: "Submitted, 2024",
    links: [{ label: "arXiv", href: "https://arxiv.org/pdf/2410.04394" }],
    tags: ["Metric geometry"],
    ai: 0,
    summary:
      "We introduce a combinatorial framework for proving quantitative estimates on nonlinear spectral gaps, where the Euclidean norm in the discrete Poincaré inequality is replaced by an arbitrary norm. As an application, we generalize a celebrated non-embeddability result of Matoušek for expander graphs.",
  },
  {
    number: 9,
    title: "On spectral outliers for inhomogeneous random symmetric matrices",
    authors: [
      { name: "Patrick O. Santos" },
      KONSTANTIN,
      {
        name: "Pierre Youssef",
        href: "https://wp.nyu.edu/pyoussef/",
      },
    ],
    venue: "Journal of Theoretical Probability, 2024",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2401.07852.pdf" },
    ],
    tags: ["Misc"],
    ai: 0,
    summary:
      "The spectra of Wigner matrices are well understood, but less is known for nonuniform variance profiles. We give sharp conditions for eigenvalue outliers that depend only on the sparsity of the variance profile rather than its fine-grained structure, providing a structural universality principle.",
  },
  {
    number: 8,
    title: "A note on the capacity of the binary perceptron",
    authors: [KONSTANTIN],
    venue: "Permanent manuscript, 2024",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2401.15092" }],
    tags: ["Discrepancy", "Statistical physics"],
    ai: 0,
    summary:
      "We give an elementary argument showing that the capacity of the half-space binary perceptron is at most .847. The conjectured value is .833, the best previous recorded bound was .996, and one is the trivial upper bound. This manuscript is not intended for journal publication.",
  },
  {
    number: 7,
    title: "Zero–one laws for random feasibility problems",
    venue: "Annals of Applied Probability, 2023",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2309.13133.pdf" },
    ],
    tags: ["Discrepancy", "Statistical physics"],
    ai: 0,
    summary:
      "We introduce a random model of combinatorial optimization with geometric structure. It encodes random versions of linear and integer programming, lattice problems, combinatorial discrepancy, matrix balancing, and generalized perceptrons. Our main result is a robust sharp-threshold, or zero–one, law for feasibility.",
  },
  {
    number: 6,
    title: "Critical window of the symmetric perceptron",
    venue: "Electronic Journal of Probability, 2022",
    links: [
      { label: "arXiv", href: "https://arxiv.org/pdf/2205.02319.pdf" },
      {
        label: "video",
        href: "https://mediaspace.gatech.edu/media/ARC+Colloquium/1_t58fwxnt",
      },
    ],
    tags: ["Statistical physics", "Discrepancy"],
    ai: 0,
    summary:
      "We determine the scale of the fluctuations in the combinatorial discrepancy of a Gaussian matrix, equivalently the critical window of the storage capacity of the symmetric binary perceptron. Perhaps surprisingly, the critical window corresponds to adding an almost constant number of rows. We also prove exponential tail bounds.",
  },
  {
    number: 5,
    title: "Discrepancy of random rectangular matrices",
    authors: [JONATHAN],
    venue: "Random Structures & Algorithms, 2021",
    links: [
      { label: "arXiv", href: "https://arxiv.org/pdf/2101.04036.pdf" },
    ],
    tags: ["Discrepancy"],
    ai: 0,
    summary:
      "We give an exact trade-off between discrepancy, dimension, and sparsity for canonical ensembles of integer matrices. By combining Stein’s method of exchangeable pairs with the second-moment method, we move past an obstruction to concentration below a certain sparsity and essentially characterize all regimes simultaneously.",
  },
  {
    number: 4,
    title: "Localized radial roll patterns in higher space dimensions",
    authors: [
      { name: "Jason J. Bramburger" },
      { name: "Chloe I. Avery" },
      { name: "Tharathep Sangsawang" },
      { name: "Margaret Beck" },
      { name: "Paul Carter" },
      { name: "Björn Sandstede" },
    ],
    venue: "SIAM Journal on Applied Dynamical Systems, 2019",
    links: [
      {
        label: "PDF",
        href: "https://epubs.siam.org/doi/pdf/10.1137/18M1218728",
      },
    ],
    tags: ["Misc"],
    ai: 0,
    summary:
      "We investigate the snaking phenomenon in bifurcation diagrams for a class of partial differential equations.",
  },
  {
    number: 3,
    title: "Critical long-range percolation: scaling limits for small β",
    authors: [
      {
        name: "Allan Sly",
        href: "https://web.math.princeton.edu/~asly/",
      },
    ],
    authorPrefix: "Advised by",
    venue: "Princeton senior thesis, 2018",
    links: [],
    tags: ["Statistical physics"],
    ai: 0,
    summary:
      "We establish almost-sure convergence of one-dimensional critical long-range percolation to a random scaling limit in the Gromov–Hausdorff metric. The regime considered has the critical exponent, with the connection probability multiplied by a small leading constant β. Manuscript available on request.",
  },
  {
    number: 2,
    title: "The developmental rules of neural superposition in Drosophila",
    authors: [
      { name: "Marion Langen" },
      { name: "Egemen Agi" },
      { name: "Lani F. Wu" },
      { name: "Steven J. Altschuler" },
      { name: "Peter R. Hiesinger" },
    ],
    venue: "Cell, 2015",
    links: [
      {
        label: "PDF",
        href: "https://www.sciencedirect.com/science/article/pii/S0092867415006455",
      },
    ],
    tags: ["Misc"],
    ai: 0,
    summary:
      "We investigate pattern formation in the neural wiring process of the Drosophila compound eye during development.",
  },
  {
    number: 1,
    title: "The zoo of solitons for curve shortening in Rⁿ",
    authors: [
      { name: "Steven J. Altschuler" },
      { name: "Lani F. Wu" },
      { name: "Sigurd B. Angenent" },
    ],
    venue: "Nonlinearity, 2015",
    links: [
      { label: "arXiv", href: "https://arxiv.org/pdf/1207.4051.pdf" },
    ],
    tags: ["Misc"],
    ai: 0,
    summary:
      "We classify all solutions to the curve-shortening equation that evolve by homothety: any combination of translation, dilation, and rotation.",
  },
];

const topics: Topic[] = [
  "Algorithms",
  "Discrepancy",
  "Metric geometry",
  "Misc",
  "Statistical physics",
];

function topicClass(topic: Topic) {
  return `tag tag-${topic.toLowerCase().replaceAll(" ", "-")}`;
}

function AuthorLine({ paper }: { paper: Paper }) {
  if (!paper.authors?.length) return null;

  return (
    <p className="authors">
      {paper.authorPrefix ?? "With"}{" "}
      {paper.authors.map((author, index) => {
        const separator =
          index === 0
            ? ""
            : index === paper.authors!.length - 1
              ? paper.authors!.length === 2
                ? " and "
                : ", and "
              : ", ";

        return (
          <Fragment key={author.name}>
            {separator}
            {author.href ? <a href={author.href}>{author.name}</a> : author.name}
          </Fragment>
        );
      })}
      .
    </p>
  );
}

export default function Home() {
  const [topic, setTopic] = useState<Topic | null>(null);

  const visiblePapers = useMemo(() => {
    return papers.filter((paper) => !topic || paper.tags.includes(topic));
  }, [topic]);

  const hasFilters = topic !== null;

  return (
    <main className="site-shell">
      <header className="hero" id="top">
        <div className="hero-copy">
          <h1>Dylan J. Altschuler</h1>
          <p className="institution">The University of Texas at Austin</p>
          <p className="role">Assistant Professor of Mathematics</p>
          <p className="lede">
            Discrete and high-dimensional probability, with applications to
            combinatorics, statistical physics, algorithm design, and{" "}
            {"{metric, convex}"} geometry.
          </p>
          <nav className="profile-links" aria-label="Profile links">
            <a href="mailto:dylan.altschuler@austin.utexas.edu">Email</a>
            <a href="https://scholar.google.com/citations?user=4JYEysUAAAAJ&hl=en">
              Google Scholar
            </a>
          </nav>
        </div>
        <figure className="portrait">
          <img
            src={`${import.meta.env.BASE_URL}headshot-2026.webp`}
            alt="Dylan Altschuler seated on outdoor steps"
            width="900"
            height="1458"
          />
        </figure>
      </header>

      <section className="profile-notes" aria-label="Biography">
        <div>
          <p className="section-kicker">Current</p>
          <p>
            Assistant professor of mathematics and a Fellow of the Sid W.
            Richardson Foundation Regents Chair at UT Austin.
          </p>
        </div>
        <div>
          <p className="section-kicker">Previously</p>
          <p>
            Postdoctoral fellow at Carnegie Mellon University with{" "}
            <a href={KONSTANTIN.href}>Konstantin Tikhomirov</a>. Ph.D. at NYU
            Courant with <a href={JONATHAN.href}>Jonathan Niles-Weed</a>;
            undergraduate at Princeton.
          </p>
        </div>
      </section>

      <section className="publications-section" id="publications">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Research</p>
            <h2>Publications</h2>
          </div>
          <p className="section-count" aria-live="polite">
            Showing {visiblePapers.length} of {papers.length}
          </p>
        </div>

        <div className="filter-panel">
          <fieldset className="filter-group topic-filter">
            <legend>Tags</legend>
            <div className="filter-options">
              <button
                className={!topic ? "filter-chip active" : "filter-chip"}
                type="button"
                aria-pressed={!topic}
                onClick={() => setTopic(null)}
              >
                All
              </button>
              {topics.map((label) => (
                <button
                  className={
                    topic === label ? "filter-chip active" : "filter-chip"
                  }
                  type="button"
                  aria-pressed={topic === label}
                  onClick={() => setTopic(label)}
                  key={label}
                >
                  {label}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="filter-controls">
            <div className="filter-group ai-filter">
              <div className="ai-scale-label">
                AI Usage Scale
                <span className="ai-scale-info">
                  <button
                    className="ai-scale-button"
                    type="button"
                    aria-label="Explain the AI usage scale"
                    aria-describedby="ai-scale-description"
                  >
                    ?
                  </button>
                  <span
                    className="ai-scale-tooltip"
                    id="ai-scale-description"
                  role="tooltip"
                >
                    <span className="ai-scale-entry">
                      <strong><b>0</b> — No AI</strong>
                      <em>Pre-LLM era.</em>
                    </span>
                    <span className="ai-scale-entry">
                      <strong><b>1</b> — Basic contribution</strong>
                      <em>
                        Ex: editing, proofreading, or figures. Ideation is
                        entirely human.
                      </em>
                    </span>
                    <span className="ai-scale-entry">
                      <strong>
                        <b>2</b> — Minor contribution; worthy of acknowledgement
                        but not authorship
                      </strong>
                      <em>
                        Ex: suggested a minor innovation, completed standard
                        computations, autonomously drafted routine proofs.
                        Ideation is predominantly human.
                      </em>
                    </span>
                    <span className="ai-scale-entry">
                      <strong>
                        <b>3</b> — Junior or equal author-level contribution
                      </strong>
                      <em>
                        Ex: given a complete sketch with technical guidance, AI
                        develops a first proof draft and suggests refinements.
                        (The sweetspot?)
                      </em>
                    </span>
                    <span className="ai-scale-entry">
                      <strong>
                        <b>4</b> — Equal or first author-level contribution
                      </strong>
                      <em>
                        Ex: given a high-level sketch, AI develops a full proof
                        in a few rounds of prompting. Vibe-coding(mathing?), with
                        non-trivial human insight provided.
                      </em>
                    </span>
                    <span className="ai-scale-entry">
                      <strong><b>5</b> — Sole significant contributor</strong>
                      <em>
                        No significant human involvement or insight beyond
                        problem selection and manuscript preparation. Autonomous
                        solution of the math.
                      </em>
                    </span>
                  </span>
                </span>
              </div>
            </div>

            {hasFilters && (
              <button
                className="clear-button"
                type="button"
                onClick={() => {
                  setTopic(null);
                }}
              >
                Clear filters
              </button>
            )}
          </div>
        </div>

        {visiblePapers.length ? (
          <ol className="paper-list" reversed start={visiblePapers[0].number}>
            {visiblePapers.map((paper) => (
              <li className="paper" key={paper.number} value={paper.number}>
                <span className="paper-number" aria-hidden="true">
                  {paper.number}
                </span>
                <article>
                  <div className="paper-heading">
                    <h3>{paper.title}</h3>
                    <div className="paper-tags" aria-label="Paper tags">
                      {[...paper.tags]
                        .sort((a, b) => a.localeCompare(b))
                        .map((tag) => (
                        <button
                          className={`${topicClass(tag)} tag-button${
                            topic === tag ? " selected" : ""
                          }`}
                          type="button"
                          aria-pressed={topic === tag}
                          onClick={() => setTopic(topic === tag ? null : tag)}
                          key={tag}
                        >
                          {tag}
                        </button>
                        ))}
                      <span
                        className={`tag ai-tag ai-${paper.ai}`}
                        aria-label={`AI contribution ${paper.ai} out of 5`}
                      >
                        AI {paper.ai}/5
                      </span>
                    </div>
                  </div>
                  <AuthorLine paper={paper} />
                  <div className="paper-meta">
                    <span>{paper.venue}</span>
                    {paper.links.map((link) => (
                      <a href={link.href} key={link.href}>
                        {link.label}
                      </a>
                    ))}
                    <details>
                      <summary>summary</summary>
                      <p>{paper.summary}</p>
                    </details>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        ) : (
          <div className="empty-state">
            <p>No papers match these filters.</p>
            <button
              type="button"
              onClick={() => {
                setTopic(null);
              }}
            >
              Show all publications
            </button>
          </div>
        )}
      </section>

      <footer>
        <p>
          Expecting to find a brilliant, award-winning optimization expert? You
          may have been looking for my brother{" "}
          <a href="https://jasonaltschuler.github.io/">Jason Altschuler</a>.
        </p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
