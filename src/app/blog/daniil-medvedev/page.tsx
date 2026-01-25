import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: '?ㅻ땺 硫붾뱶踰좊뜲???좎닔 ?꾨줈?꾧낵 ?ㅽ넗由?,
  description: '??? ?꾨룄? 源딆? ?숆뎄, ?낇듅???ъ??붾떇?쇰줈 吏怨듭쓽 誘명븰??援ы쁽?섎뒗 ?ㅻ땺 硫붾뱶踰좊뜲?꾩쓽 ?깆옣 諛곌꼍, 寃쎄린 ?ㅽ??? ?멸컙?곸씤 硫대え? ?쇱씠踰?援щ룄瑜??뺣━?덉뒿?덈떎.',
  keywords: ['?뚮땲??, '?ㅻ땺 硫붾뱶踰좊뜲??, '?좎닔 ?꾨줈??, '?ㅽ넗由?, '?ъ떆??],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/daniil-medvedev',
  },
  openGraph: {
    title: '?ㅻ땺 硫붾뱶踰좊뜲???좎닔 ?꾨줈?꾧낵 ?ㅽ넗由?,
    description: '??? ?꾨룄? 源딆? ?숆뎄, ?낇듅???ъ??붾떇?쇰줈 吏怨듭쓽 誘명븰??援ы쁽?섎뒗 ?ㅻ땺 硫붾뱶踰좊뜲?꾩쓽 ?깆옣 諛곌꼍, 寃쎄린 ?ㅽ??? ?멸컙?곸씤 硫대え? ?쇱씠踰?援щ룄瑜??뺣━?덉뒿?덈떎.',
    url: 'https://tennisfriends.co.kr/blog/daniil-medvedev',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '?ㅻ땺 硫붾뱶踰좊뜲???좎닔 ?꾨줈?꾧낵 ?ㅽ넗由?,
    description: '??? ?꾨룄? 源딆? ?숆뎄, ?낇듅???ъ??붾떇?쇰줈 吏怨듭쓽 誘명븰??援ы쁽?섎뒗 ?ㅻ땺 硫붾뱶踰좊뜲?꾩쓽 ?깆옣 諛곌꼍, 寃쎄린 ?ㅽ??? ?멸컙?곸씤 硫대え? ?쇱씠踰?援щ룄瑜??뺣━?덉뒿?덈떎.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'growth-background-rules-records', text: '?깆옣 諛곌꼍 ??洹쒖튃怨?湲곕줉?쇰줈 留뚮뱺 ?덉젙媛?, depth: 2 },
  { id: 'playing-style-low-trajectory-straight', text: '寃쎄린 ?ㅽ???????? ?꾨룄, 湲?吏곸꽑, ??쾶 ?ロ엳??媛?, depth: 2 },
  { id: 'return-positioning-start-point', text: '由ы꽩怨??ъ??붾떇 ??異쒕컻?먯쓣 諛붽씀??湲곗닠', depth: 2 },
  { id: 'rhythm-selection-emotion-procedure', text: '由щ벉怨??좏깮 ??媛먯젙? ??쾶, ?덉감???쇱젙?섍쾶', depth: 2 },
  { id: 'surface-transition-hard-grass-clay', text: '?쒕㈃蹂??꾪솚 ???섎뱶??吏곸꽑, ?붾뵒??媛꾧껐, ?먰넗???몃궡', depth: 2 },
  { id: 'human-aspects-honesty-humor-discipline', text: '?멸컙?곸씤 硫대え ???붿쭅?④낵 ?좊㉧, 洹몃━怨?洹쒖쑉', depth: 2 },
  { id: 'nationality-culture-belief-rules', text: '援?쟻怨?臾명솕 ??洹쒖튃??誘용뒗 ?덇린', depth: 2 },
  { id: 'relationships-rivals-speed-angle', text: '愿怨꾩? ?쇱씠踰????띾룄???몃?? 媛곷룄??臾몃떟', depth: 2 },
  { id: 'famous-scenes-center-twice-line-once', text: '紐낆옣硫???以묒븰 ??踰? ?쇱씤 ??踰?, depth: 2 },
  { id: 'equipment-details-tension-balance-contact', text: '?λ퉬? ?뷀뀒?????먯뀡쨌諛몃윴?ㅒ룹젒?먯쓽 誘몄꽭 議곗젙', depth: 2 },
  { id: 'future-challenges-advance-timing-conclusion', text: '?욎쑝濡쒖쓽 怨쇱젣 ???꾩쭊????대컢怨?寃곕쭚??媛꾧껐??, depth: 2 },
  { id: 'fans-community-lasting-trust', text: '?ш낵 而ㅻ??덊떚 ???ㅻ옒 媛???좊ː', depth: 2 },
];

const faqs = [
  {
    q: '?ㅻ땺 硫붾뱶踰좊뜲?꾩쓽 寃쎄린 ?ㅽ??쇱? ?대뼡媛??',
    a: '??? ?꾨룄? 源딆? ?숆뎄, ?낇듅??肄뷀듃 ?ъ??붾떇???뱀쭠?낅땲?? 媛곷룄? 源딆씠濡??곷????좏깮吏瑜??먯젏 醫곹? 媛??吏怨듭쓽 誘명븰??援ы쁽?⑸땲??'
  },
  {
    q: '硫붾뱶踰좊뜲?꾩쓽 ?깆옣 諛곌꼍? ?대뼡媛??',
    a: '?ㅻ궡 肄뷀듃? 湲곕줉 ?명듃濡?梨꾩썙吏??좊뀈湲곕? 蹂대깉?듬땲?? 洹쒖튃怨?湲곕줉?쇰줈 ?덉젙媛먯쓣 留뚮뱾?덇퀬, ?앺솢??吏덉꽌媛 ??臾대??먯꽌???쒖젙???붾뱾由ъ? ?딄쾶 留뚮벊?덈떎.'
  },
  {
    q: '硫붾뱶踰좊뜲?꾩쓽 媛뺤젏? 臾댁뾿?멸???',
    a: '??? ?꾨룄, 湲?吏곸꽑, ??쾶 ?ロ엳??媛곸씠 媛뺤젏?낅땲?? 由ы꽩怨??ъ??붾떇?쇰줈 異쒕컻?먯쓣 諛붽씀??湲곗닠怨?踰좎씠?ㅻ씪???ㅼ뿉?쒖쓽 湲몄씠 ?쒖뼱, ?쒓컙 ?붿튂湲곌? ?곗뼱?⑸땲??'
  },
  {
    q: '硫붾뱶踰좊뜲?꾩쓽 ?멸컙?곸씤 硫대え???대뼡媛??',
    a: '吏곸꽕?곸씠吏留?梨낆엫???몄뼱媛 遺꾨챸?⑸땲?? 肄뷀듃 諛뽰뿉?쒕뒗 ?좊㉧濡?遺꾩쐞湲곕? ?吏留? 寃쎄린 ?꾪썑 ?덉감? ?怨쇱쓽 ?쎌냽? 嫄곗쓽 ?먰듃?щ쑉由ъ? ?딆뒿?덈떎.'
  },
  {
    q: '硫붾뱶踰좊뜲?꾩쓽 誘몃옒 ?꾨쭩? ?대뼸寃??섎굹??',
    a: '?섑봽肄뷀듃?먯꽌????諛뺤옄 鍮좊Ⅸ 留덈Т由ъ? ?몄빻???쒕툕 肄붿뒪 ?ㅼ뼇?붽? 怨쇱젣?낅땲?? 由ы꽩 吏곹썑 ?꾩쭊 ??대컢???욌떦湲곌퀬 留덈Т由??좏깮吏瑜??⑥닚?뷀븯硫??먮꼫吏 愿由ш? 媛쒖꽑?⑸땲??'
  },
];

export default function DaniilMedvedevBlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {['?뚮땲??, '?ㅻ땺 硫붾뱶踰좊뜲??, '?좎닔 ?꾨줈??, '?ㅽ넗由?, '?ъ떆??].map((tag) => (
              <Badge key=?뚮땲???좎닔 className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">
                ?뚮땲???좎닔
              </Badge>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            ?ㅻ땺 硫붾뱶踰좊뜲??
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            媛곷룄? 源딆씠濡?吏쒕뒗 吏怨듭쓽 誘명븰
          </p>
          <p className="text-lg text-blue-50/90 mb-10 max-w-3xl leading-relaxed">
            ??? ?꾨룄濡?源딆씠瑜??꾩쟻?섍퀬, 由ы꽩怨?肄뷀듃 ?ъ??붾떇?쇰줈 ?곷????좏깮吏瑜?吏?곕뒗 ?ㅻ땺 硫붾뱶踰좊뜲?꾩쓽 ?깆옣, ?ㅽ??? ?멸컙?곸씤 硫대え? 怨쇱젣瑜????몄쑝濡?
          </p>
          
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">8遺??쎄린</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">2025??9??21??/span>
            </div>
          </div>
        </div>
      </div>

      <Article slug="daniil-medvedev" date="2024-01-01" title="" excerpt="">
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
                <strong className="text-blue-700 dark:text-blue-300">吏곷떟:</strong> ?ㅻ땺 硫붾뱶踰좊뜲??Daniil Medvedev)????? ?꾨룄? 源딆? ?숆뎄, ?낇듅??肄뷀듃 ?ъ??붾떇?쇰줈 ?곷????좏깮吏瑜??먯젏 醫곹? 媛???꾨? ?섎뱶肄뷀듃???ㅺ퀎?먮떎.
              </p>
            </div>

            <h2 id="growth-background-rules-records">?깆옣 諛곌꼍 ??洹쒖튃怨?湲곕줉?쇰줈 留뚮뱺 ?덉젙媛?/h2>
            <p>洹몄쓽 ?좊뀈湲곕뒗 ?ㅻ궡 肄뷀듃? 湲곕줉 ?명듃濡?梨꾩썙議뚮떎. 肄붿튂??寃곌낵蹂대떎 怨쇱젙, ?뱁엳 "?숈옉??以꾩씠怨??묒젏???욎뿉 ?붾떎"????臾몄옣??諛섎났?덇퀬, 硫붾뱶踰좊뜲?꾨뒗 留ㅼ씪???덈젴???앸굹硫??섎맂 寃껉낵 怨좎튌 ?먯쓣 媛곴컖 ??以꾨줈 ?붿빟?덈떎. ??꽑 ?먯젙吏?먯꽌???ㅽ듃?덉묶 ?쒖꽌쨌?뚮컢???쒓컙쨌泥??쒕툕 猷⑦떞??嫄곗쓽 諛붽씀吏 ?딅뒗 ?앺솢??吏덉꽌媛 紐몄뿉 諛곗뿀怨? ???듦?????愿以묎낵 湲??좊━ ?띿뿉?쒕룄 ?쒖젙???붾뱾由ъ? ?딄쾶 留뚮뱺??</p>

            <h2 id="playing-style-low-trajectory-straight">寃쎄린 ?ㅽ???????? ?꾨룄, 湲?吏곸꽑, ??쾶 ?ロ엳??媛?/h2>
            <p>硫붾뱶踰좊뜲?고봽??怨듭? ?ㅽ듃瑜??꾩뒳?꾩뒳?섍쾶 ?섏뼱 源딄쾶 媛?쇱븠?붾떎. ?ы빖?쒕뒗 ???뚯쟾蹂대떎 ??? ?꾨룄? 湲몄씠濡??뺣컯?섎ŉ, 諛깊빖?쒕뒗 ?묒넀??寃ш퀬?⑥쑝濡??쇱씤???뉕쾶 湲곸뼱 媛곸쓣 留뚮뱺?? 洹몃뒗 踰좎씠?ㅻ씪???ㅼ뿉???쒕몢 嫄몄쓬 ??臾쇰윭???ъ??섏쓣 利먭꺼 痍⑦븯吏留? 洹몃쭔??蹂쇱쓽 湲몄씠 ?쒖뼱? ?쒓컙 ?붿튂湲곗뿉 ?ν븯?? ?곷?媛 臾대━??媛곸쓣 ?대㈃ 利됱떆 ?ㅼ슫?붾씪?몄쑝濡??꾪솚??洹좏삎???붾뱾怨? 吏㏃? 蹂쇱뿉???섑봽肄뷀듃?먯꽌 ??諛뺤옄 ??쾶 ?ロ엳??媛곷룄濡?留덈Т由ы븳?? ?ㅽ듃 ?묎렐? 怨쇨컧?섍린蹂대떎 ?꾩슂???뚮쭔?붾퉰 怨듦컙??紐낇솗??蹂댁씪 ?뚮쭔 ?ㅼ뼱媛 ?ㅼ닔瑜?以꾩씤??</p>

            <h2 id="return-positioning-start-point">由ы꽩怨??ъ??붾떇 ??異쒕컻?먯쓣 諛붽씀??湲곗닠</h2>
            <p>洹몄쓽 由ы꽩? ?⑥? ?섎룎??蹂대궡???됱쐞媛 ?꾨땲?? ?쇱뒪???쒕툕?먮뒗 ?쒖갭 ?ㅼ뿉??異쒕컻???꾨룄? 湲몄씠瑜?留욎떠 ?곷???3援??⑦꽩??吏?곌퀬, ?몄빻???쒕툕?먮뒗 ?꾩쭊???묒젏???욎꽭?대떎. 諛붽묑?먯꽌 ?덉쑝濡??ㅼ뼱?ㅻ뒗 ???뺣났 ?숈꽑???곷????좎뒪? 肄붿뒪 ?좏깮???붾뱾?? 寃쎄린 珥덈컲遺???щ━??遺?섎? 留뚮뱺?? 由ы꽩 ?댄썑?먮뒗 以묒븰 源딆? 蹂쇰줈 媛곸쓣 ?レ븘?먭퀬, ??踰덉㎏ ?ㅽ듃濡쒗겕?먯꽌留?肄붾꼫瑜??댁뼱 ?묒? 洹좎뿴??留뚮뱺??</p>

            <h2 id="rhythm-selection-emotion-procedure">由щ벉怨??좏깮 ??媛먯젙? ??쾶, ?덉감???쇱젙?섍쾶</h2>
            <p>?ъ씤???ъ씠 洹몃뒗 ?쇱폆 ?ㅽ듃留곸쓣 ?묎퀬 ??踰덉쓽 源딆? ?명씉?쇰줈 猷⑦떞??怨좎젙?쒕떎. ?ㅼ퐫?닿? 湲곗슱?대룄 猷⑦떞??湲몄씠瑜?諛붽씀吏 ?딆븘 ?щ컯??湲됰벑?섏? ?딅뒗?? ??대툕?덉씠??珥덈컲?먮뒗 ?ㅽ듃瑜??됰꼮???섍린??援ъ쭏濡??믪씠쨌湲몄씠瑜??뺤씤?섍퀬, 3~4?ъ씤??援ш컙?먯꽌留??쇱씤???뉕쾶 ???밸??섎? ?섏쭊?? ?꾪뿕???뚰뵾?섏? ?딅릺, 洹쇨굅 ?녿뒗 ?꾨컯? ?섏? ?딅뒗 ?쒕룄媛 ?κ린?꾩뿉???섏쓣 ?몃떎.</p>

            <h2 id="surface-transition-hard-grass-clay">?쒕㈃蹂??꾪솚 ???섎뱶??吏곸꽑, ?붾뵒??媛꾧껐, ?먰넗???몃궡</h2>
            <p>?섎뱶?먯꽌???쇱뒪???쒕툕 ?뺣쪧怨?由ы꽩 ?⑦꽩?쇰줈 吏怨듭쓽 ?먮쫫??留뚮뱺?? ?붾뵒?먯꽌??諛깆뒪?숈쓣 吏㏐쾶 以꾩씠怨??좎뒪瑜???떠 ??먯쓣 ?욎뿉 怨좎젙, 珥덈컲 ?띾룄瑜??듭젣?쒕떎. ?먰넗?먯꽌???뚯쟾??議곌툑 ?뷀빐 ?숆뎄瑜??덉젙?쒗궎怨? ??踰덉㎏???ㅼ꽢 踰덉㎏ ?ㅽ듃濡쒗겕?먯꽌 ?쒕∼쨌?щ씪?댁뒪瑜??욎뼱 ?쒗룷瑜?鍮꾪듉 ???ㅼ떆 吏곸꽑?쇰줈 ?꾪솚?쒕떎. ?쒕㈃???щ씪?몃룄 ?먯튃? ?숈씪?섎떎. ?먮쫫??癒쇱? ?덉젙?쒗궎怨? ?대┛ ?덉뿉?쒕쭔 移쇱쓣 戮묐뒗??</p>

            <h2 id="human-aspects-honesty-humor-discipline">?멸컙?곸씤 硫대え ???붿쭅?④낵 ?좊㉧, 洹몃━怨?洹쒖쑉</h2>
            <p>硫붾뱶踰좊뜲?꾩쓽 ?명꽣酉곕뒗 吏곸꽕?곸씠吏留?梨낆엫???몄뼱媛 遺꾨챸?섎떎. ?섎맂 ?좎? 以鍮꾧? 留욎븯?ㅺ퀬, 遺議깊븳 ?좎? ?섏젙???꾩슂?섎떎怨?留먰븳?? 肄뷀듃 諛뽰뿉?쒕뒗 ?λ궃湲??욎씤 ?좊㉧濡?遺꾩쐞湲곕? ?吏留? 寃쎄린 ?꾪썑???덉감? ?怨쇱쓽 ?쎌냽? 嫄곗쓽 ?먰듃?щ쑉由ъ? ?딅뒗?? ?ъ뿉寃뚮뒗 ?덈쭪異ㅺ낵 吏㏃? 媛먯궗 ?몄궗瑜??딆? ?딄퀬, 蹂쇳띁?㉱룹퐫???ㅽ깭?꾩뿉寃뚮룄 ?덉쓽瑜?吏?⑤떎.</p>

            <h2 id="nationality-culture-belief-rules">援?쟻怨?臾명솕 ??洹쒖튃??誘용뒗 ?덇린</h2>
            <p>?ъ떆?꾩쓽 ?덈젴 臾명솕??諛섎났怨?洹쒖튃??以묒떆?쒕떎. 硫붾뱶踰좊뜲?꾩쓽 ?뚮땲?ㅼ뿉?????뺤떊???쒕졆?섎떎. ?붾젮??蹂二쇰낫???뺣???諛섎났?쇰줈 援ъ꽍???먮뱶由ш퀬, ?묒? ?깃났??以묒꺽?????먮쫫??留뚮뱺?? ??쒗? ?대깽?몄뿉??蹂댁씠??移⑥갑?⑥? 媛쒖씤???섏뼱 怨듬룞泥댁쓽 ?곸쭠?쇰줈 ?뺤옣?쒕떎.</p>

            <h2 id="relationships-rivals-speed-angle">愿怨꾩? ?쇱씠踰????띾룄???몃?? 媛곷룄??臾몃떟</h2>
            <p>媛뺥븳 媛?띿쑝濡?珥덈컲???μ븙?섎뒗 ?좎꽭?? 留욌텤????洹몃뒗 媛곴낵 湲몄씠濡??띾룄瑜??곸뇙?쒕떎. 由ы꽩 ?ъ??섏쓣 ?ㅻ줈 鍮??쒓컙??踰뚭퀬, 以묒븰 源딆? 蹂쇰줈 媛곸쓣 ?レ븘 ?먮ŉ, ??踰덉㎏?먯꽌留?肄붾꼫瑜??댁뼱 諛섍꺽?쒕떎. ?ㅽ듃瑜??쒕몢瑜대뒗 ?좏삎?먭쾺 ??? ?듦낵?룰낵 源딆? 濡쒕툕瑜?踰덇컝??蹂댁뿬 泥??쒕룄瑜?二쇱??섍쾶 留뚮뱺?? 媛숈? ?⑦꽩????踰??덉슜?섎㈃ ??踰덉㎏?먮뒗 ??먭낵 ?ㅼ쐷 湲몄씠瑜?諛붽퓭 媛숈? 援ъ뿭???ㅻⅨ ?띾룄濡?李뚮Ⅸ??</p>

            <h2 id="famous-scenes-center-twice-line-once">紐낆옣硫???以묒븰 ??踰? ?쇱씤 ??踰?/h2>
            <p>釉뚮젅?댄겕 ?ъ씤?? 洹몃뒗 以묒븰 源딆? 蹂???媛쒕줈 ?곷? ?ㅽ뀦???ㅻ줈 諛?대궦 ?? 諛깊빖?쒕? 紐?媛源뚯씠 ?뚯뼱?밴꺼 ?쇱씤?쇰줈 ?⑦샇???묐뒗?? 怨듭씠 ???좎쓣 ?ㅼ튂硫?鍮좎졇?섍컝 ??愿以묒쓽 ?⑥씠 ?좎떆 硫롪퀬, 洹몃뒗 媛숈? ?띾룄濡?踰좎씠?ㅻ씪?몄쓣 諛잙뒗?? 媛먯젙???꾨땲???덉감媛 ?밸?瑜?留뚮뱺?ㅻ뒗 誘우쓬???묒텞???쒓컙?대떎.</p>

            <h2 id="equipment-details-tension-balance-contact">?λ퉬? ?뷀뀒?????먯뀡쨌諛몃윴?ㅒ룹젒?먯쓽 誘몄꽭 議곗젙</h2>
            <p>??뚯옣 湲곗삩쨌?듬룄??留욎떠 ?ㅽ듃留??먯뀡???뚰룺 議곗젙?섍퀬, ?쇱폆 諛몃윴?ㅻ뒗 怨쇰룄???ㅻ뱶 ?ㅻ퉬瑜??쇳빐 ?ㅼ쐷 ?뚮났??鍮좊Ⅴ寃??쒕떎. ?좊컻? 痢〓㈃ 吏吏? ?묒???洹좏삎??以묒떆??湲됯??띉룰툒?뺤??먯꽌 諛쒕ぉ???붾뱾由쇱쓣 以꾩씤?? ?λ퉬媛 ?뚮젅?대? 吏諛고븯?꾨줉 ?먯? ?딄퀬, ?뚮젅?닿? ?붽뎄?섎뒗 留뚰겮留?議곗젙?쒕떎??泥좏븰???쇨??쒕떎.</p>

            <h2 id="future-challenges-advance-timing-conclusion">?욎쑝濡쒖쓽 怨쇱젣 ???꾩쭊????대컢怨?寃곕쭚??媛꾧껐??/h2>
            <p>洹멸? ???믪씠 ?꾩빟?섍린 ?꾪빐 ?꾩슂??寃껋? ?섑봽肄뷀듃?먯꽌????諛뺤옄 鍮좊Ⅸ 留덈Т由ъ? ?몄빻???쒕툕 肄붿뒪???뚰룺 ?ㅼ뼇?붾떎. 由ы꽩 吏곹썑 3援ъ뿉???꾩쭊 ??대컢??諛?諛뺤옄 ?욌떦湲곌퀬, 留덈Т由??좏깮吏瑜??쒕몢 媛쒕줈 ?⑥닚?뷀븳?ㅻ㈃ 湲?寃쎄린?먯꽌???먮꼫吏 愿由ш? ?ъ썙吏?寃껋씠?? ?대? 媛뽰텣 源딆씠? 媛곸쓽 ?ㅻ뱷???꾩뿉 寃곕쭚???띾룄媛 ?뱁엳硫? 洹몄쓽 ?대쫫? ??臾대???留덉?留??λ㈃?????먯＜ ?⑥쓣 媛?μ꽦???щ떎.</p>

            <h2 id="fans-community-lasting-trust">?ш낵 而ㅻ??덊떚 ???ㅻ옒 媛???좊ː</h2>
            <p>硫붾뱶踰좊뜲?꾨? ?ㅻ옒 ?묒썝?섍쾶 留뚮뱶???섏? ?쒕룄???쇨??깆씠?? ?닿린???좎뿉??媛먯궗???쒖꽌瑜?吏?ㅺ퀬, 吏???좎뿉??梨낆엫??癒쇱? 留먰븳?? ?묒? ?쒖뒪泥섏? ?뺥솗???좏깮??紐⑥뿬 ???щ엺??珥덉긽???꾩꽦?쒕떎. 湲곕줉? ?쒓? ?섏?留? ?쒕룄??湲곗뼲???쒕떎. 洹몃옒??洹몄쓽 ?뚮땲?ㅻ뒗 寃곌낵瑜??섏뼱 ?ㅻ뱷?쇰줈 ?⑤뒗??</p>
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
                      <a href="https://en.wikipedia.org/wiki/Daniil_Medvedev" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
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
            currentSlug="daniil-medvedev" 
            category="
                ?뚮땲???좎닔
              " 
            tags={['?뚮땲??, '?ㅻ땺 硫붾뱶踰좊뜲??, '?좎닔 ?꾨줈??, '?ㅽ넗由?, '?ъ떆??]} 
          />

          <CTA />
        </div>
      </Article>
    </div>
  );
}