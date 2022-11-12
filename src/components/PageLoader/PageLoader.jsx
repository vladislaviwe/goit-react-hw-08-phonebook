import { LineWave } from  'react-loader-spinner'
import { LoaderContainer } from './PageLoaderStyled'

export default function PageLoader() {
  return (
    <LoaderContainer>
        <LineWave
            margin="auto"
            height="200"
            width="200"
            ariaLabel="line-wave"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            firstLineColor="crimson"
            middleLineColor="black"
            lastLineColor="skyblue"
        />
    </LoaderContainer>
  )
}
