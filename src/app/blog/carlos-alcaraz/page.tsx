import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: '移대?濡쒖뒪 ?뚯뭅?쇱뒪 ?좎닔 ?꾨줈?꾧낵 ?ㅽ넗由?,
  description: '?ㅽ럹??異쒖떊 ?뚮땲???좎닔 移대?濡쒖뒪 ?뚯뭅?쇱뒪???깆옣 諛곌꼍, 寃쎄린 ?ㅽ??? ?멸컙??硫대え? ?쇱씠踰??댁빞湲곕? ?댁븯?듬땲??',
  keywords: ['?뚮땲??, '移대?濡쒖뒪 ?뚯뭅?쇱뒪', '?좎닔 ?꾨줈??, '?ㅽ넗由?, 'ATP'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/carlos-alcaraz',
  },
  openGraph: {
    title: '移대?濡쒖뒪 ?뚯뭅?쇱뒪 ?좎닔 ?꾨줈?꾧낵 ?ㅽ넗由?,
    description: '?ㅽ럹??異쒖떊 ?뚮땲???좎닔 移대?濡쒖뒪 ?뚯뭅?쇱뒪???깆옣 諛곌꼍, 寃쎄린 ?ㅽ??? ?멸컙??硫대え? ?쇱씠踰??댁빞湲곕? ?댁븯?듬땲??',
    url: 'https://tennisfriends.co.kr/blog/carlos-alcaraz',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '移대?濡쒖뒪 ?뚯뭅?쇱뒪 ?좎닔 ?꾨줈?꾧낵 ?ㅽ넗由?,
    description: '?ㅽ럹??異쒖떊 ?뚮땲???좎닔 移대?濡쒖뒪 ?뚯뭅?쇱뒪???깆옣 諛곌꼍, 寃쎄린 ?ㅽ??? ?멸컙??硫대え? ?쇱씠踰??댁빞湲곕? ?댁븯?듬땲??',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'growth-background-daily-accumulation', text: '?깆옣 諛곌꼍 ???쇱긽?먯꽌 異뺤쟻????, depth: 2 },
  { id: 'playing-style-pressure-variation-smile', text: '寃쎄린 ?ㅽ??????뺣컯怨?蹂二? 洹몃━怨?誘몄냼', depth: 2 },
  { id: 'experience-growth-surface-adaptation', text: '寃쏀뿕怨??깆옣 ???쒕㈃??媛由ъ? ?딅뒗 ?곸쓳??, depth: 2 },
  { id: 'human-aspects-attitude-over-results', text: '?퇲uman?곸씤 硫대え ??寃곌낵蹂대떎 ?쒕룄', depth: 2 },
  { id: 'nationality-culture-modern-interpretation', text: '援?쟻怨?臾명솕 ???ㅽ럹???꾪넻 ?꾩뿉 ?щ┛ ?꾨????댁꽍', depth: 2 },
  { id: 'relationships-rivals-grow-together', text: '愿怨꾩? ?쇱씠踰????④퍡 ???믪씠', depth: 2 },
  { id: 'famous-scenes-courage-of-choice', text: '紐낆옣硫????좏깮???⑷린', depth: 2 },
  { id: 'future-challenges-narrative-over-skill', text: '?욎쑝濡쒖쓽 怨쇱젣 ??湲곗닠蹂대떎 ?쒖궗', depth: 2 },
];

const faqs = [
  {
    q: '移대?濡쒖뒪 ?뚯뭅?쇱뒪??二쇰Т湲곕뒗 臾댁뾿?멸???',
    a: '洹몄쓽 二쇰Т湲곕뒗 怨듦꺽?곸씤 踰좎씠?ㅻ씪???뚮젅?댁? 鍮좊Ⅸ 肄뷀듃 而ㅻ쾭由ъ??낅땲?? 媛뺣젰???ㅽ듃濡쒗겕? ?곸썡???대룞?λ젰?쇰줈 ?곷?瑜??뺣컯?⑸땲??'
  },
  {
    q: '?뚯뭅?쇱쫰???대뼡 ?쒕㈃?먯꽌 媛??媛뺥븳媛??',
    a: '紐⑤뱺 ?쒕㈃?먯꽌 媛뺣젰??紐⑥뒿??蹂댁뿬二쇱?留? ?뱁엳 ?대젅??肄뷀듃?먯꽌 ?곸썡???ㅽ? 而⑦듃濡ㅺ낵 ?꾩쭊 ?뚮젅?대줈 媛뺤젏??諛쒗쐶?⑸땲??'
  },
  {
    q: '?뚯뭅?쇱쫰???멸컙?곸씤 硫대え???대뼡媛??',
    a: '寃몄넀?섍퀬 媛먯궗?섎뒗 ?쒕룄瑜??좎??섎ŉ, 肄뷀듃 ?덉뿉?쒕뒗 ??댄븯怨?肄뷀듃 諛뽰뿉?쒕뒗 ?곕쑜???깃꺽??媛吏怨??덉뒿?덈떎.'
  },
  {
    q: '?뚯뭅?쇱쫰???쇱씠踰뚯? ?꾧뎄?멸???',
    a: '??덊겕 ?쒕꼫????쇱씠踰뚮━媛 ??쒖쟻?낅땲?? ?쒕줈???μ젏???몄젙?섎㈃?쒕룄 移섏뿴??寃쎌웳???쇱튂怨??덉뒿?덈떎.'
  },
  {
    q: '?뚯뭅?쇱쫰??誘몃옒 ?꾨쭩? ?대뼸寃??섎굹??',
    a: '湲곗닠???꾩꽦?꾨? ?믪씠怨??쒖궗瑜??볥뒗 怨쇱젙???덉뒿?덈떎. ?대? 留롮? 湲곕줉???몄썱吏留? ?욎쑝濡??????낆쟻???대０ ?좎옱?μ쓣 媛吏怨??덉뒿?덈떎.'
  },
];

export default function CarlosAlcarazBlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {['?뚮땲??, '移대?濡쒖뒪 ?뚯뭅?쇱뒪', '?좎닔 ?꾨줈??, '?ㅽ넗由?, 'ATP'].map((tag) => (
              <Badge key=?뚮땲???좎닔 className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">
                ?뚮땲???좎닔
              </Badge>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            移대?濡쒖뒪 ?뚯뭅?쇱뒪
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            '利먭린???щ뒫'?쇰줈 ?쒕?瑜??욌떦湲??딆? ??
          </p>
          <p className="text-lg text-blue-50/90 mb-10 max-w-3xl leading-relaxed">
            怨듦꺽??踰좎씠?ㅻ씪?멸낵 蹂二쇰줈 ?먮쫫???μ븙?섎뒗 移대?濡쒖뒪 ?뚯뭅?쇱뒪???깆옣, ?ㅽ??? ?멸컙誘몄? ?쇱씠踰??댁빞湲곕? ???몄쑝濡?
          </p>
          
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">6遺??쎄린</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">2025??11??1??/span>
            </div>
          </div>
        </div>
      </div>

      <Article slug="carlos-alcaraz" date="2024-01-01"
        title=""
        excerpt=""
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

          {/* Table of Contents */}
          <div className="mb-12">
            <TOC items={tocItems} />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h2:pb-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-base">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 rounded-2xl p-6 md:p-8 mb-10 border border-blue-100 dark:border-blue-900">
              <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed font-medium mb-0">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3 align-middle" />
                <strong className="text-blue-700 dark:text-blue-300">吏곷떟:</strong> 移대?濡쒖뒪 ?뚯뭅?쇱뒪???ㅽ럹??臾대Ⅴ?쒖븘 ?섑뙏留덉뿉???먮? ?좎닔濡? 怨듦꺽?곸씤 踰좎씠?ㅻ씪?멸낵 鍮좊Ⅸ ?꾪솚?쇰줈 ?먮쫫????댁쪖??寃껋씠 媛뺤젏?낅땲??
              </p>
            </div>

            <h2 id="growth-background-daily-accumulation">?깆옣 諛곌꼍 ???쇱긽?먯꽌 異뺤쟻????/h2>
            <p>洹몄쓽 ?쒖옉? 嫄곗갹?섏? ?딆븯?듬땲?? 吏???대읇???댁쁺?섎뜕 ?꾨쾭吏 怨곸뿉??怨듭쓣 二쇨퀬諛쏅뜕 ?쒓컙???덈젴???遺遺꾩씠?덇퀬, ?ㅼ뒪濡?肄뷀듃瑜??뺣━?섍퀬 ?ㅼ쓬 ?좎쓣 以鍮꾪븯??猷⑦떞??紐몄뿉 諛곗뿀?듬땲?? ?깆쟻???꾪븳 議곌툒?⑤낫???섎（瑜?異⑹떎???볥뒗 ?쒕룄媛 ?곗꽑?댁뿀怨? 洹??듦?? 湲??좊━?먯꽌???쒖젙???먰듃?ъ?吏 ?딅뒗 ?덉젙媛먯쑝濡??댁뼱議뚯뒿?덈떎. 泥?냼???쒖젅?먮뒗 ?좊같?ㅼ쓽 寃쎄린瑜?蹂듦린?섎ŉ "?????ъ씤?몄뿉??? ?좏깮???덈뒗媛"瑜??ㅼ뒪濡?吏덈Ц?덇퀬, ?듭쓣 李얠쑝硫?利됱떆 ?곗뒿??諛섏쁺?덉뒿?덈떎. 湲곗닠蹂대떎 ?쒕룄, ?щ뒫蹂대떎 ?듦???癒쇱??쇰뒗 誘우쓬??洹몄쓽 諛뷀깢??留뚮뱾?덉뒿?덈떎.</p>

            <h2 id="playing-style-pressure-variation-smile">寃쎄린 ?ㅽ??????뺣컯怨?蹂二? 洹몃━怨?誘몄냼</h2>
            <p>?뚯뭅?쇱쫰??寃쎄린??'怨듦꺽'怨?'?ㅼ뼇????怨듭〈?⑸땲?? 踰좎씠?ㅻ씪?몄뿉??癒쇱? ?뺣컯??嫄몃릺, 吏㏃? 蹂쇱씠 ?⑥뼱吏硫?怨쇨컧???꾩쭊??諛쒕━濡?留덈Т由ы빀?덈떎. 移댁슫???ы빖?쒕뒗 ?뚯쟾怨?吏곸꽑??鍮꾩쑉???먯쑀濡?쾶 諛붽씀硫? 諛깊빖?쒕뒗 媛곷룄瑜??댁뼱 肄뷀듃 ??쓣 理쒕????ъ슜?⑸땲?? ?곷? 由ы꽩??源딆쓣?섎줉 洹몃뒗 ?쒕∼?룰낵 濡쒕툕瑜??욎뼱 由щ벉??源⑤쑉由ш퀬, ?ㅼ쓬 蹂쇱뿉???ㅼ떆 媛뺥븳 ?ㅽ듃濡쒗겕濡??띾룄瑜??뚯뼱?щ┰?덈떎. 臾댁뾿蹂대떎 ?몄긽?곸씤 寃껋? ?꾧린?먯꽌???섏삤??誘몄냼?낅땲?? ?쒖젙???ㅼ옟??洹?紐?珥덇? ?ㅼ쓬 ?좏깮??媛蹂띻쾶 留뚮뱾怨? 怨쇨컧??寃곗젙???뺣떦?뷀빀?덈떎. ?띾룄? ??대컢??諛붽씀??媛먭컖, 肄뷀듃 ?꾩껜瑜?蹂대ŉ '?ш린????踰?鍮꾪?寃좊떎'怨??먮떒?섎뒗 ?곸긽?μ씠 洹몃? ?밸퀎?섍쾶 留뚮벊?덈떎.</p>

            <h2 id="experience-growth-surface-adaptation">寃쏀뿕怨??깆옣 ???쒕㈃??媛由ъ? ?딅뒗 ?곸쓳??/h2>
            <p>?섎뱶, ?대젅?? ?붾뵒 ?대뵒?쒕뱺 ?먯떊留뚯쓽 ?쒗룷瑜?媛뽰텛?ㅻ뒗 ?몃젰???댁뼱議뚯뒿?덈떎. ?대젅?댁뿉?쒕뒗 源딆? ?ㅽ?怨??섎퉬 ?꾪솚?쇰줈 ?좊━瑜?湲멸쾶 媛?멸?怨? ?섎뱶?먯꽌???쇱뒪???쒕툕 ?뺣쪧怨?由ы꽩 ?꾩튂瑜?誘몄꽭?섍쾶 議곗젙??珥덈컲 二쇰룄沅뚯쓣 梨숆퉩?덈떎. ?붾뵒?먯꽌????? 諛붿슫?쒖뿉 留욎텣 以鍮??먯꽭? ?щ씪?댁뒪??鍮덈룄瑜??믪뿬 由щ벉???⑥닚?뷀빀?덈떎. ?쒕㈃留덈떎 湲곗닠??鍮꾩쑉???щ━?섏?留?吏?μ젏? 媛숈뒿?덈떎. "?곷?媛 ??怨꾪쉷???숈쓽?섎룄濡?留뚮뱺??" ???먯튃 ?뺣텇??洹몃뒗 以묒슂??寃쎄린?쇱닔濡??됱냼 猷⑦떞?????꾧꺽?섍쾶 吏?ㅻŉ, 而⑤뵒?섏씠 ?꾨꼍?섏? ?딆쓣 ?뚯뿉???밸????먮쫫????텛吏 ?딆뒿?덈떎.</p>

            <h2 id="human-aspects-attitude-over-results">?멸컙?곸씤 硫대え ??寃곌낵蹂대떎 ?쒕룄</h2>
            <p>洹몄쓽 ?명꽣酉곗뿉??諛섎났?섎뒗 ?⑥뼱??'媛먯궗'? '利먭굅?'?낅땲?? ?곗뒿??吏猷⑦빐吏??뚮㈃ 泥섏쓬 ?쇱폆???〓뜕 ?좎쓽 ?ㅻ젞???좎삱由ш퀬, ?밸━???좎뿉???ㅽ깭?꾩? 媛議깆쓣 癒쇱? 李얠뒿?덈떎. ?⑤같???ㅼ뿉???곷????μ젏??癒쇱? 留먰븯???쒕룄??肄뷀듃 諛뽰쓽 ?좊ː濡??뚯븘?듬땲?? 洹몃뒗 "?ㅼ닔???꾧뎄???쒕떎. 臾몄젣???ㅼ쓬 怨듭쓣 ?대뼸寃???섎뒓???쇨퀬 留먰븯怨??⑸땲?? ??媛꾨떒??臾몄옣?댁빞留먮줈 洹멸? ?꾧린?먯꽌 ?쒖젙???껋? ?딅뒗 ?댁쑀瑜??ㅻ챸?⑸땲??</p>

            <h2 id="nationality-culture-modern-interpretation">援?쟻怨?臾명솕 ???ㅽ럹???꾪넻 ?꾩뿉 ?щ┛ ?꾨????댁꽍</h2>
            <p>?ㅽ럹???뚮땲?ㅺ? ?댁뼱???덇린? ?뚯쟾???꾪넻? 洹몄쓽 湲곕컲?낅땲?? ?ш린??鍮좊Ⅸ ?먮떒怨??꾩쭊 ?깊뼢, 怨쇨컧???쒕∼?룹씠?쇰뒗 ?꾨????댁꽍???뷀빐 ?덈줈???ㅽ??쇱쓣 留뚮뱾?덉뒿?덈떎. 媛먯젙???④린吏 ?딅릺 ?곷?瑜?議댁쨷?섎뒗 ?쒖뒪泥섎? ?딆? ?딅뒗 ?쒕룄???ㅽ럹???ㅽ룷痢?臾명솕???곕쑜?⑥쓣 ??븯?듬땲?? 肄뷀듃 諛뽰뿉?쒕뒗 寃몄넀?섍퀬, 肄뷀듃 ?덉뿉?쒕뒗 ??댄븳 ???鍮꾧? 洹몄쓽 ?쒖궗瑜??띿꽦?섍쾶 ?⑸땲??</p>

            <h2 id="relationships-rivals-grow-together">愿怨꾩? ?쇱씠踰????④퍡 ???믪씠</h2>
            <p>洹몄? ?숈꽭?????덊겕 ?쒕꼫???留뚮궓? ?쒕줈???쒓퀎瑜??뚯뼱?щ┛ ??쒖쟻 ?щ??낅땲?? ?쒕줈??媛뺤젏???몄젙?섎㈃?쒕룄 肄뷀듃???쒕㈃ ???ъ씤?몃룄 ?묐낫?섏? ?딅뒗 愿怨꾨뒗 ?щ뱾?먭쾶 理쒓퀬??蹂쇨굅由щ? ?쒓났?⑸땲?? ?쒗렪, ?좊같 ?몃???嫄곕Ъ?ㅺ낵 留덉＜????洹몃뒗 議댁쨷???욎꽭?곕릺 ?먮젮?? 蹂댁씠吏 ?딆뒿?덈떎. '洹몃뱾??留뚮뱺 湲곗????섏뼱?쒕뒗 寃껋씠 ????븷'?대씪???쒕룄???몃???寃쎄퀎?먯꽌 ?먯떊留뚯쓽 湲몄쓣 ?댁뼱媛寃좊떎???좎뼵泥섎읆 ?ㅻ┰?덈떎.</p>

            <h2 id="famous-scenes-courage-of-choice">紐낆옣硫????좏깮???⑷린</h2>
            <p>湲곗뼲???⑤뒗 ?λ㈃?ㅼ쓽 怨듯넻?먯? '寃곗젙???쒓컙'?낅땲?? ?붿슦?ㅼ뿉??留욌뒗 ??踰덉㎏ ?쒕툕, ??대툕?덉씠??珥덈컲??泥??좊━, 釉뚮젅?댄겕 ?ъ씤?몃? ?댁? 吏곹썑??由ы꽩 ?ъ씤?? 洹몃뒗 ?대윴 援?㈃?먯꽌 ??긽 肄뷀듃瑜??볤쾶 蹂닿퀬, 媛???⑥닚?섎㈃?쒕룄 ?곷?媛 ?덉긽?섏? 紐삵븳 ?대쾿??怨좊쫭?덈떎. ?쒕∼?룹쑝濡???踰??묎퀬, ?ㅼ쓬 蹂쇱뿉???꾨젰???잙뒗 ?앹쓽 援ъ꽦? ?좏깮??寃곌낵瑜??ㅼ뒪濡?梨낆엫吏寃좊떎???쒕룄?댁옄, 愿以묒뿉寃?'?뚮땲?ㅻ뒗 ?щ??덈뒗 寃뚯엫'?꾩쓣 ?곴린?쒗궎???곗텧?닿린???⑸땲??</p>

            <h2 id="future-challenges-narrative-over-skill">?욎쑝濡쒖쓽 怨쇱젣 ??湲곗닠蹂대떎 ?쒖궗</h2>
            <p>?뚯뭅?쇱쫰?먭쾶 ?⑥? 怨쇱젣??湲곕줉蹂대떎 '?대뼡 ?댁빞湲곕줈 湲곗뼲??寃껋씤媛'??媛源앹뒿?덈떎. ?대┛ ?좎쓽 ?깆떎?⑥쓣 ?껋? ?딆? 梨? ?ㅼ뼇???쒕㈃?먯꽌 ?먯떊???뚮땲?ㅻ? ??媛꾧껐?섍쾶 ?ㅻ벉???꾩슂媛 ?덉뒿?덈떎. 洹몃뒗 ?대? 留롮? 寃껋쓣 蹂댁뿬二쇱뿀?듬땲?? ?댁젣??以묒슂???쒓컙留덈떎 ?좏깮???댁쑀瑜?紐낅즺?섍쾶 利앸챸?섎뒗 ?쇰쭔 ?⑥븯?듬땲?? 洹?利앸챸? ?섎굹???ъ씤?? ?섎굹???쒖젙, ?섎굹??猷⑦떞?먯꽌 ?쒖옉??寃껋엯?덈떎.</p>
          </div>

          {/* Related Links */}
          <div className="mt-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                愿???먮즺
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    ?대? 留곹겕
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/players" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <span className="text-xl">?룇</span>
                        <span className="font-medium">?좎닔 ?꾨줈??/span>
                        <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link href="/utility/ntrp-test" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <span className="text-xl">?렞</span>
                        <span className="font-medium">?ㅻ젰 ?뚯뒪??/span>
                        <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link href="/utility/play-style-test" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <span className="text-xl">?렱</span>
                        <span className="font-medium">?뚮젅???ㅽ????뚯뒪??/span>
                        <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    ?몃? ?먮즺
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <a href="https://www.atptour.com/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        <span className="text-xl">?뙋</span>
                        <span className="font-medium">ATP ?ъ뼱 怨듭떇 ?ъ씠??/span>
                        <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://en.wikipedia.org/wiki/Carlos_Alcaraz" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        <span className="text-xl">?뱰</span>
                        <span className="font-medium">?꾪궎?쇰뵒???꾨줈??/span>
                        <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}

          {/* CTA */}
          
      {/* FAQ Section */}
      <FAQ items={faqs} />

                <RelatedPosts 
            currentSlug="carlos-alcaraz" 
            category="
                ?뚮땲???좎닔
              " 
            tags={['?뚮땲??, '移대?濡쒖뒪 ?뚯뭅?쇱뒪', '?좎닔 ?꾨줈??, '?ㅽ넗由?, 'ATP']} 
          />

          <CTA />
        </div>
      </Article>
    </div>
  );
}
