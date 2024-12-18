import React, { useState } from 'react';
import './css/faq.css';
import { FaPlus, FaMinus } from 'react-icons/fa';


const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "ما هو موقع تفاصيل؟",
      answer: "موقع تفاصيل هو منصة تساعدك في اختيار الهدايا المثالية. يمكنك استعراض المنتجات بسهولة واختيار ما يناسبك."
    },
    {
      question: "كيف يمكنني استعراض المنتجات؟",
      answer: "يمكنك مشاهدة المنتجات بشكل عام أو من خلال أصناف محددة على الواجهة الرئيسية للتطبيق."
    },
    {
      question: "كيف أستطيع معرفة المزيد عن منتج معين؟",
      answer: "للحصول على معلومات إضافية عن أي منتج، اضغط على زر 'المزيد' الموجود على بطاقة المنتج."
    },
    {
      question: "كيف يمكنني تعديل معلومات حسابي الشخصي؟",
      answer: "يمكنك مشاهدة معلومات ملفك الشخصي والتعديل عليها من خلال الضغط على زر القائمة المنسدلة في أعلى يمين الصفحة الرئيسية ثم اختيار 'الحساب الشخصي'."
    },
    {
      question: "كيف أستطيع رؤية الحجوزات التي قمت بها؟",
      answer: "للاطلاع على الحجوزات، اضغط على القائمة المنسدلة في أعلى يمين الصفحة الرئيسية ثم اختر 'الحجوزات'."
    },
    {
      question: "كيف يمكنني إدارة حجوزاتي؟",
      answer: "عند دخولك إلى صفحة الحجوزات، ستظهر لك الحجوزات المؤكدة وغير المؤكدة: \n• لرؤية الحجوزات المؤكدة: اضغط على زر 'الحجوزات المؤكدة'. \n• لرؤية الحجوزات غير المؤكدة: اضغط على زر 'الحجوزات غير المؤكدة'."
    },
    {
      question: "كيف يمكنني إلغاء حجز غير مؤكد؟",
      answer: "يمكنك إلغاء الحجز غير المؤكد من خلال الضغط على زر 'إلغاء الحجز' الخاص ببطاقة المنتج."
    },
    {
      question: "ماذا عن الحجوزات المؤكدة؟",
      answer: "بالنسبة للحجز المؤكد، يمكنك إرسال طلب لإلغاء الحجز. إذا تمت الموافقة عليه من قبل الإدارة، سيتم إلغاء الحجز."
    },
    {
      question: "كيف يمكنني الوصول إلى رابط موقع شي إن؟",
      answer: "يمكنك الوصول إلى رابط موقع شي إن من خلال القائمة المنسدلة الموجودة في أعلى يمين الصفحة الرئيسية."
    },
    {
      question: "كيف يمكنني طلب بضاعة من شي إن؟",
      answer: "يمكنك طلب بضاعة من شي إن عبر التواصل مع الإدارة من خلال أيقونة الواتساب الموجودة في الصفحة الرئيسية."
    },
    {
      question: "هل يمكنني حجز منتج مع أو بدون توصيل؟",
      answer: "نعم، يمكنك حجز منتج مع اختيار توصيل أو بدون توصيل. إذا اخترت توصيل، ستحتاج إلى تحديد المكان والساعة والتاريخ."
    },
    {
      question: "كيف يمكنني تسجيل الخروج من الموقع؟",
      answer: "يمكنك تسجيل الخروج من الموقع من خلال القائمة المنسدلة أيضًا."
    }
  ];

  const toggleAnswer = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container">
      <h1 className="title">الأسئلة الشائعة</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="question" onClick={() => toggleAnswer(index)}>
            {faq.question}
            <span className="icon">{activeIndex === index ? <FaMinus /> : <FaPlus />}</span>
          </div>
          {activeIndex === index && <div className="answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;