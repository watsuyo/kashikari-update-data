const admin = require('firebase-admin')

const serviceAccount = require('./kashika-dev-firebase-adminsdk-daxb1-6312add770.json')

admin.initializeApp({ credential: admin.credential.cert(serviceAccount) })

const firestore = admin.firestore()
const settings = { timestampsInSnapshots: true }

firestore.settings(settings)

const userData = {
  createdAt: admin.firestore.FieldValue.serverTimestamp(),
  updatedAt: admin.firestore.FieldValue.serverTimestamp(),
  address: {
    zipcode: '1000001',
    region: '東京都',
    locality: '千代田区',
    streetAddress: '千代田 1-1',
    extendedAddress: 'kashikariビル'
  },
  email: 'test@test.com',
  firstName: '四郎',
  lastName: '伊藤',
  tell: '09011111111'
}
const updateData = async () => {
	await firestore
		.collection('users')
		.add(userData)
		.then(async userRef => {
				const itemData =
					{
						createdAt: admin.firestore.FieldValue.serverTimestamp(),
						updatedAt: admin.firestore.FieldValue.serverTimestamp(),
						name: 'SONY ミラーレス一眼 α9 ボディ ILCE-9',
						description:
							'「光を捉え続ける」革新的なシステムにより新次元の高速性能を実現。新たな撮影表現の可能性を広げるフルサイズミラーレス一眼カメラ',
						mainImageUrl:
							'https://firebasestorage.googleapis.com/v0/b/kashika-dev.appspot.com/o/shoes.png?alt=media&token=f9f8a0ff-4df4-48a1-bb53-8c37760a3fc5',
						price: 500,
						status: 1,
						userRef: userRef,
						subImageUrls: [
							'https://firebasestorage.googleapis.com/v0/b/kashika-dev.appspot.com/o/shoes.png?alt=media&token=f9f8a0ff-4df4-48a1-bb53-8c37760a3fc5',
							'https://firebasestorage.googleapis.com/v0/b/kashika-dev.appspot.com/o/shoes.png?alt=media&token=f9f8a0ff-4df4-48a1-bb53-8c37760a3fc5'
						]
					}

				await firestore
					.collection('items')
					.add(itemData)
					.then(async itemRef => {
						itemData
					})
				}
	)
}

updateData()
