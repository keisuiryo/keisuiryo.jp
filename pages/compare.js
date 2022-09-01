import Stack from './modules/stack'
import Wrapper from './modules/wrapper'

export default function Home() {
    return (
        <Wrapper title="UH・学寮などとの比較" id="compare" desc="東北大学YMCA渓水寮と、東北大学が運営するユニバーシティ・ハウス、学生寮などを比較します。">
            <div className='compare-box'>
            <h3 className='compare-title'><span className="material-symbols-rounded compare-icon">
                currency_yen
            </span>費用</h3>
            <h4 className='compare-name'>学生寮(東北大学運営)</h4>
            <p className='compare-text'>寮費　　4300円(日就寮は700円)共益費　10000~15000<br />
            水光熱費を含めて18000~20000円程度<br />
            ほかに食費・交通費がかかります</p>
            <h4 className='compare-name'>ユニバーシティ・ハウス</h4>
            <p className='compare-text'>寄宿料　21600~28000円/月(施設により異なる)<br />
            共益費　1500~3500円/月<br />
            水光熱費込みで30000~45000円程度<br />
            ほかに水光熱費・食費・交通費がかかります"</p>
            <h4 className='compare-name'>渓水寮</h4>
            <p className='compare-text'>寮費　47000円/月(授業日朝晩の食費・共益費・水光熱費込み)<br />他に土日・昼食の食費・交通費がかかります</p>
            <h4 className='compare-name'>出典</h4>
            <p className='compare-text'>東北大学(2022),R4年度_進学説明会スライド資料<br />他に土日・昼食の食費・交通費がかかります</p>
        </div>
        </Wrapper>
    )
}