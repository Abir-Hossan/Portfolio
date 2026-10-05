// import { Star } from "lucide-react";
// import { testimonials } from "../data/site";
// export default function Testimonials() {
//   return (
//     <section id="testimonials" className="section testimonials">
//       <div className="container">
//         <p className="eyebrow">Clients Feedback</p>
//         <h2>Customer testimonials</h2>
//         <div className="testimonial-grid">
//           {testimonials.map((t) => (
//             <article className="testimonial-card" key={t.name}>
//               <div className="stars" aria-label="5 out of 5 stars">
//                 {Array.from({ length: 5 }).map((_, i) => (
//                   <Star key={i} fill="currentColor" />
//                 ))}
//               </div>
//               <p>“{t.quote}”</p>
//               <div className="person">
//                 <span className="avatar">{t.initials}</span>
//                 <span>
//                   <strong>{t.name}</strong>
//                   <small>{t.role}</small>
//                 </span>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
