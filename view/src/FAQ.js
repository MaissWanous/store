import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const Question = styled.h3`
  cursor: pointer;
  margin: 15px 0;
  color: #800080; /* لون موف */
  background-color: #ffccff; /* لون زهر */
  padding: 10px; /* تقليل الحشو */
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1em; /* حجم الخط */
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #e6b3e6; /* لون زهر أغمق عند المرور */
    transform: scale(1.02); /* تأثير تكبير عند المرور */
  }
`;

const Answer = styled.p`
  background-color: #f8f9fa;
  padding: 10px; /* تقليل الحشو */
  border-radius: 5px;
  margin: 10px 0;
  border-left: 4px solid #800080; /* خط جانبي ملون */
  color: #555;
  font-size: 0.95em; /* حجم خط أصغر للإجابة */
`;

const Icon = styled.span`
  font-size: 1em; /* حجم الأيقونات */
  color: #800080; /* لون موف */
`;

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
    <Container>
      <Title>الأسئلة الشائعة (FAQ)</Title>
      {faqs.map((faq, index) => (
        <div key={index}>
          <Question onClick={() => toggleAnswer(index)}>
            {faq.question}
            <Icon>{activeIndex === index ? <FaMinus /> : <FaPlus />}</Icon>
          </Question>
          {activeIndex === index && <Answer>{faq.answer}</Answer>}
        </div>
      ))}
    </Container>
  );
};

export default FAQ;